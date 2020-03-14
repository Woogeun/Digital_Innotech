from django.http import HttpResponse, JsonResponse, FileResponse
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
import json
import base64


from .models import *

# Home
@csrf_exempt
def returnHome(request):
	if request.method == "POST":
		# print(request.read())
		# body = json.loads(request.body.decode('utf-8'))
		# data_type, mode, content = body['type'], body['mode'], body['content']
		# print(body)
		return HttpResponse('Success')
	else:
		image_instance = list(Home.objects.all())[-1]
		print(image_instance.image)
		download_link = f'http://{request.get_host()}/{image_instance.image}'
		print(download_link)
		# return HttpResponse(image_instance.image.path)
		# return HttpResponse(download_link)
		with open(image_instance.image.path, "rb") as image:
			return HttpResponse(image.read(), content_type="image")


# CTO
@csrf_exempt
def returnEducation(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = Education(content=content)
		instance.save()
		return HttpResponse('Success')
	else:
		return HttpResponse(list(Education.objects.all())[-1].content)

@csrf_exempt
def returnCareer(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = Career(content=content)
		instance.save()
		return HttpResponse('Success')
	else:
		return HttpResponse(list(Career.objects.all())[-1].content)

@csrf_exempt
def returnMessage(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = Message(content=content)
		instance.save()
		return HttpResponse('Success')
	else:
		return HttpResponse(list(Message.objects.all())[-1].content)

@csrf_exempt
def returnProfile(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = Profile(image=content)
		# instance.save()
		return HttpResponse('Success')
	else:
		image_path = list(Profile.objects.all())[-1].image.path
		with open(image_path, "rb") as image:
			return HttpResponse(image.read(), content_type="image")

@csrf_exempt
def returnTitleCTO(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = TitleCTO(content=content)
		instance.save()
		return HttpResponse('Success')
	else:
		return HttpResponse(list(TitleCTO.objects.all())[-1].content)


# History
@csrf_exempt
def returnHistory(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		
		if mode == 'upload':
			instance = History(year=content['year'], content=content['content'])
			instance.save()
		elif mode == 'delete':
			instance_id = content
			instance = History.objects.get(id=instance_id)
			instance.delete()
		elif mode == 'update':
			instance_id = content['id']
			instance = History.objects.filter(id=instance_id)
			instance.update(year=content['year'], content=content['content'])
		else:
			return HttpResponse(f'No such mode: {mode}')

		return HttpResponse('Success')
		
		
	else:
		objs = list(History.objects.all())
		list_of_json = [{'id': obj.id, 'year': obj.year, 'content': obj.content} for obj in objs]
		return JsonResponse({
			'list_of_json': list_of_json
		});

@csrf_exempt
def returnTitleHistory(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = TitleHistory(content=content)
		instance.save()
		return HttpResponse('Success')
	else:
		return HttpResponse(list(TitleHistory.objects.all())[-1].content)


# Introduction
@csrf_exempt
def returnPdfImage(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = PdfImage(image=content)
		# instance.save()
		return HttpResponse('Success')
	else:
		image_path = list(PdfImage.objects.all())[-1].image.path
		with open(image_path, "rb") as image:
			return HttpResponse(image.read(), content_type="image")

@csrf_exempt
def returnPdf(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = Pdf(image=content)
		# instance.save()
		return HttpResponse('Success')
	else:
		valid_image = list(Pdf.objects.all())[-1].image.path
		with open(valid_image, "rb") as f:
			return HttpResponse(f.read(), content_type="application/pdf")

@csrf_exempt
def returnTitleIntroduction(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = TitleIntroduction(content=content)
		instance.save()
		return HttpResponse('Success')
	else:
		return HttpResponse(list(TitleIntroduction.objects.all())[-1].content)


# News
@csrf_exempt
def returnNews(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		
		if mode == 'upload':
			instance = News(date=content['year'], content=content['content'])
			instance.save()
		elif mode == 'delete':
			instance_id = content
			instance = News.objects.get(id=instance_id)
			instance.delete()
		elif mode == 'update':
			instance_id = content['id']
			instance = News.objects.filter(id=instance_id)
			instance.update(date=content['year'], content=content['content'])
		else:
			return HttpResponse(f'No such mode: {mode}')

		return HttpResponse('Success')
	else:
		objs = list(News.objects.all())
		list_of_json = [{'id': obj.id, 'year': obj.date, 'content': obj.content} for obj in objs]
		return JsonResponse({
			'list_of_json': list_of_json
		});

@csrf_exempt
def returnTitleNews(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = TitleNews(content=content)
		instance.save()
		return HttpResponse('Success')
	else:
		return HttpResponse(list(TitleNews.objects.all())[-1].content)













