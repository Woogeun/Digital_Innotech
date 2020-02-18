from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import generics

from .models import *

def returnImageDetection(request):
	obj = list(ImageDetection.objects.all())[-1]
	return JsonResponse({
		'title': obj.title,
		'content': obj.content
	})
def returnVideoDetection(request):
	obj = list(VideoDetection.objects.all())[-1]
	return JsonResponse({
		'title': obj.title,
		'content': obj.content
	})
def returnNetwork(request):
	valid_image = list(Network.objects.all())[-1].image.path
	try:
		with open(valid_image, "rb") as f:
			return HttpResponse(f.read(), content_type="image/jpeg")
	except IOError:
		red = Image.new('RGBA', (1, 1), (255,0,0,0))
		response = HttpResponse(content_type="image/jpeg")
		red.save(response, "JPEG")

	return response
