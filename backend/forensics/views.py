from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import generics

from .models import *

# Technique
def returnWhy(request):
	obj = list(Why.objects.all())[-1]
	return JsonResponse({
		'title': obj.title,
		'content': obj.content
	})

def returnHow(request):
	obj = list(How.objects.all())[-1]
	return JsonResponse({
		'title': obj.title,
		'content': obj.content
	})

def returnNow(request):
	obj = list(Now.objects.all())[-1]
	return JsonResponse({
		'title': obj.title,
		'content': obj.content
	})

def returnImage(request):
	valid_image = list(Image.objects.all())[-1].image.path
	try:
		with open(valid_image, "rb") as f:
			return HttpResponse(f.read(), content_type="image/jpeg")
	except IOError:
		red = Image.new('RGBA', (1, 1), (255,0,0,0))
		response = HttpResponse(content_type="image/jpeg")
		red.save(response, "JPEG")

	return response


# Paper
def returnJournal(request):
	objs = list(Journal.objects.all())
	list_of_text = [obj.content for obj in objs]
	return JsonResponse({
		'list_of_text': list_of_text
	})

def returnConference(request):
	objs = list(Conference.objects.all())
	list_of_text = [obj.content for obj in objs]
	return JsonResponse({
		'list_of_text': list_of_text
	})





















	