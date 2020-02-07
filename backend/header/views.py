from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics


from .models import Logo
import os

def returnLogo(request):
	valid_image = list(Logo.objects.all())[-1].image.path

	try:
		with open(valid_image, "rb") as f:
			print("no exception")
			return HttpResponse(f.read(), content_type="image/jpeg")
	except IOError:
		print("yes exception")
		red = Image.new('RGBA', (1, 1), (255,0,0,0))
		response = HttpResponse(content_type="image/jpeg")
		red.save(response, "JPEG")
	return response
