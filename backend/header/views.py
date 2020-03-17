from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

from rest_framework.request import Request
from rest_framework.parsers import MultiPartParser, FormParser
from PIL import Image 
from io import BytesIO
from django.core.files.base import ContentFile

from .models import Logo
import os

@csrf_exempt
def returnLogo(request):
	if request.method == "POST":
		body = Request(request, parsers=[FormParser(), MultiPartParser()]).data
		data_type, mode, content, id = body['type'], body['mode'], body['content'], body['id']
		img = Image.open(content)
		io = BytesIO()
		img.save(io, format='PNG')
		image = ContentFile(io.getvalue(), 'logo.png')

		instance = Image(image=image)
		instance.save()
		return HttpResponse('Success')
	else:
		image_path = list(Logo.objects.all())[-1].image.path
		with open(image_path, "rb") as image:
			return HttpResponse(image.read(), content_type="image")
