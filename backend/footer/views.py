from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics

from .models import Contact
from .serializers import ContactSerializer

def returnContact(request):
	
	contact = list(Contact.objects.all())[-1]
	# print(contact)

	return HttpResponse(contact)