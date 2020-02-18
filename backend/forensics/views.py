from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics

from .models import *

# Technique
def returnWhy(request):
	return HttpResponse(list(Why.objects.all())[-1].content)

def returnHow(request):
	return HttpResponse(list(How.objects.all())[-1].content)

def returnNow(request):
	return HttpResponse(list(Now.objects.all())[-1].content)

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
	return HttpResponse(list(Journal.objects.all())[-1].content)

def returnConference(request):
	return HttpResponse(list(Conference.objects.all())[-1].content)




	