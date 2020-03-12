from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

from .models import *

@csrf_exempt
def returnContact(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = Contact(content=content)
		instance.save()
		return HttpResponse('Success')
	else:
		contact = list(Contact.objects.all())[-1]
	return HttpResponse(contact)

@csrf_exempt
def returnTitle(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = Title(content=content)
		instance.save()
		return HttpResponse('Success')
	else:
		title = list(Title.objects.all())[-1].content
	return HttpResponse(title)

