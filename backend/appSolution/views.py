from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics

from .models import *

def returnTitleTemp(request):
	title = list(TitleTemp.objects.all())[-1].content
	return HttpResponse(title)

