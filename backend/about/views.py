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

def returnTitleCTO(request):
	return HttpResponse(list(TitleCTO.objects.all())[-1].content)


# History
def returnHistory(request):
	objs = list(History.objects.all())
	list_of_json = [{'year': obj.year, 'content': obj.content} for obj in objs]
	return JsonResponse({
		'list_of_json': list_of_json
	});

def returnTitleHistory(request):
	return HttpResponse(list(TitleHistory.objects.all())[-1].content)


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

def returnTitleIntroduction(request):
	return HttpResponse(list(TitleIntroduction.objects.all())[-1].content)


# News
def returnNews(request):
	objs = list(News.objects.all())
	list_of_json = [{'date': obj.date, 'content': obj.content} for obj in objs]
	return JsonResponse({
		'list_of_json': list_of_json
	});

def returnTitleNews(request):
	return HttpResponse(list(TitleNews.objects.all())[-1].content)













