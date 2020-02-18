from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import generics

from .models import *

# Home
def returnHome(request):
	valid_image = list(Home.objects.all())[-1].image.path
	try:
		with open(valid_image, "rb") as f:
			return HttpResponse(f.read(), content_type="image/jpeg")
	except IOError:
		red = Image.new('RGBA', (1, 1), (255,0,0,0))
		response = HttpResponse(content_type="image/jpeg")
		red.save(response, "JPEG")

	return response


# CTO
def returnEducation(request):
	return HttpResponse(list(Education.objects.all())[-1].content)

def returnCareer(request):
	return HttpResponse(list(Career.objects.all())[-1].content)

def returnMessage(request):
	return HttpResponse(list(Message.objects.all())[-1].content)

def returnProfile(request):
	valid_image = list(Profile.objects.all())[-1].image.path
	try:
		with open(valid_image, "rb") as f:
			return HttpResponse(f.read(), content_type="image/jpeg")
	except IOError:
		red = Image.new('RGBA', (1, 1), (255,0,0,0))
		response = HttpResponse(content_type="image/jpeg")
		red.save(response, "JPEG")

	return response


# History
def returnHistory(request):
	obj = list(History.objects.all())[-1]
	return JsonResponse({
		'year': obj.year,
		'content': obj.content
	});


# Introduction
def returnPdfImage(request):
	valid_image = list(PdfImage.objects.all())[-1].image.path
	try:
		with open(valid_image, "rb") as f:
			return HttpResponse(f.read(), content_type="image/jpeg")
	except IOError:
		red = Image.new('RGBA', (1, 1), (255,0,0,0))
		response = HttpResponse(content_type="image/jpeg")
		red.save(response, "JPEG")

	return response

def returnPdf(request):
	valid_image = list(Pdf.objects.all())[-1].image.path
	with open(valid_image, "rb") as f:
		return HttpResponse(f.read(), content_type="application/pdf")


# News
def returnNews(request):
	obj = list(News.objects.all())[-1]
	return JsonResponse({
		'date': obj.date,
		'content': obj.content
	});














