from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics

from .models import *

def returnContact(request):
	contact = list(Contact.objects.all())[-1]
	return HttpResponse(contact)

def returnTitle(request):
	title = list(Title.objects.all())[-1].content
	return HttpResponse(title)

