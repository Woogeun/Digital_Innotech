from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

from rest_framework.request import Request
from rest_framework.parsers import MultiPartParser, FormParser
from PIL import Image 
from io import BytesIO
from django.core.files.base import ContentFile
from .models import *

@csrf_exempt
def returnTitleTemp(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = TitleTemp(content=content)
		instance.save()
		return HttpResponse('Success')
	else:
		title = list(TitleTemp.objects.all())[-1].content
		return HttpResponse(title)

@csrf_exempt
def returnImageTemp(request):
	if request.method == "POST":
		body = Request(request, parsers=[FormParser(), MultiPartParser()]).data
		data_type, mode, content, id = body['type'], body['mode'], body['content'], body['id']
		img = Image.open(content)
		io = BytesIO()
		img.save(io, format='PNG')
		image = ContentFile(io.getvalue(), 'img_temp.png')

		instance = ImageTemp(image=image)
		instance.save()
		return HttpResponse('Success')
	else:
		image_instance = list(ImageTemp.objects.all())[-1]
		with open(image_instance.image.path, "rb") as image:
			return HttpResponse(image.read(), content_type="image")
