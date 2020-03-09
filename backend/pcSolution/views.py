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

def returnTitleKAI_Forensics(request):
	title = list(TitleKAI_Forensics.objects.all())[-1].content
	return HttpResponse(title)

