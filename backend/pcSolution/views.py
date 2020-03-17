from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from .models import *

@csrf_exempt
def returnImageDetection(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = ImageDetection(title=content['title'], content=content['content'])
		instance.save()
		return HttpResponse('Success')
	else:
		obj = list(ImageDetection.objects.all())[-1]
		return JsonResponse({
			'title': obj.title,
			'content': obj.content
		})

@csrf_exempt
def returnVideoDetection(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = VideoDetection(title=content['title'], content=content['content'])
		instance.save()
		return HttpResponse('Success')
	else:
		obj = list(VideoDetection.objects.all())[-1]
		return JsonResponse({
			'title': obj.title,
			'content': obj.content
		})

@csrf_exempt
def returnNetwork(request):
	if request.method == "POST":
		body = Request(request, parsers=[FormParser(), MultiPartParser()]).data
		data_type, mode, content, id = body['type'], body['mode'], body['content'], body['id']
		img = Image.open(content)
		io = BytesIO()
		img.save(io, format='JPEG')
		image = ContentFile(io.getvalue(), 'network.jpg')

		instance = Network(image=image)
		instance.save()
		return HttpResponse('Success')
	else:
		images = list(Network.objects.all())
		list_of_image = [open(image.image.path).read() for image in images]
		return JsonResponse({
			'list_of_image': list_of_image
		})
		# try:
		# 	with open(valid_image, "rb") as f:
		# 		return HttpResponse(f.read(), content_type="image/jpeg")
		# except IOError:
		# 	red = Image.new('RGBA', (1, 1), (255,0,0,0))
		# 	response = HttpResponse(content_type="image/jpeg")
		# 	red.save(response, "JPEG")

		# return response

@csrf_exempt
def returnTitleKAI_Forensics(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = TitleKAI_Forensics(content=content)
		instance.save()
		return HttpResponse('Success')
	else:
		title = list(TitleKAI_Forensics.objects.all())[-1].content
		return HttpResponse(title)










