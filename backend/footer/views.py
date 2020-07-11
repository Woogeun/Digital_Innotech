from rest_framework.parsers import MultiPartParser, FormParser
from django.http import HttpResponse, JsonResponse, FileResponse
from rest_framework.response import Response
from rest_framework.request import Request
from django.views.decorators.csrf import csrf_exempt
from io import BytesIO
from django.core.files.base import ContentFile
import json
import base64
from PIL import Image


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
def returnPdf(request):
	if request.method == "POST":
		body = Request(request, parsers=[FormParser(), MultiPartParser()]).data
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = Pdf(pdf=content)
		instance.save()
		return HttpResponse('Success')
	else:
		valid_pdf = list(Pdf.objects.all())[-1].pdf.path
		with open(valid_pdf, "rb") as f:
			return HttpResponse(f.read(), content_type="application/pdf")



		