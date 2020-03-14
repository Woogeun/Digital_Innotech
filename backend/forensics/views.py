from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from .models import *

# Technique
@csrf_exempt
def returnWhy(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = Why(title=content['title'], content=content['content'])
		instance.save()
		return HttpResponse('Success')
	else:
		obj = list(Why.objects.all())[-1]
		return JsonResponse({
			'title': obj.title,
			'content': obj.content
		})

@csrf_exempt
def returnHow(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = How(title=content['title'], content=content['content'])
		instance.save()
		return HttpResponse('Success')
	else:
		obj = list(How.objects.all())[-1]
		return JsonResponse({
			'title': obj.title,
			'content': obj.content
		})

@csrf_exempt
def returnNow(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = Now(title=content['title'], content=content['content'])
		instance.save()
		return HttpResponse('Success')
	else:
		obj = list(Now.objects.all())[-1]
		return JsonResponse({
			'title': obj.title,
			'content': obj.content
		})

@csrf_exempt
def returnImage(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = Image(image=content)
		instance.save()
		return HttpResponse('Success')
	else:
		image_path = list(Image.objects.all())[-1].image.path
		with open(image_path, "rb") as image:
			return HttpResponse(image.read(), content_type="image")

@csrf_exempt
def returnTitleTechnique(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = TitleTechnique(content=content)
		instance.save()
		return HttpResponse('Success')
	else:
		title = list(TitleTechnique.objects.all())[-1].content
		return HttpResponse(title)


# Paper
@csrf_exempt
def returnJournal(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		
		if mode == 'upload':
			instance = Journal(content=content)
			instance.save()
		elif mode == 'delete':
			instance_id = content
			instance = Journal.objects.get(id=instance_id)
			instance.delete()
		elif mode == 'update':
			instance_id = content['id']
			instance = Journal.objects.filter(id=instance_id)
			instance.update(content=content['content'])
		else:
			return HttpResponse(f'No such mode: {mode}')
		return HttpResponse("Success")
	else:
		objs = list(Journal.objects.all())
		list_of_text = [{'id': obj.id, 'content': obj.content} for obj in objs]
		return JsonResponse({
			'list_of_text': list_of_text
		})

@csrf_exempt
def returnConference(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		
		if mode == 'upload':
			instance = Conference(content=content)
			instance.save()
		elif mode == 'delete':
			instance_id = content
			instance = Conference.objects.get(id=instance_id)
			instance.delete()
		elif mode == 'update':
			instance_id = content['id']
			instance = Conference.objects.filter(id=instance_id)
			instance.update(content=content['content'])
		else:
			return HttpResponse(f'No such mode: {mode}')
		return HttpResponse("Success")
	else:
		objs = list(Conference.objects.all())
		list_of_text = [{'id': obj.id, 'content': obj.content} for obj in objs]
		return JsonResponse({
			'list_of_text': list_of_text
		})

@csrf_exempt
def returnTitlePaper(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = TitlePaper(content=content)
		instance.save()
		return HttpResponse('Success')
	else:
		title = list(TitlePaper.objects.all())[-1].content
		return HttpResponse(title)




















	