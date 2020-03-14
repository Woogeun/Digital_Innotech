from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

from .models import Logo
import os

@csrf_exempt
def returnLogo(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = Logo(content=content)
		instance.save()
		return HttpResponse('Success')
	else:
		image_path = list(Logo.objects.all())[-1].image.path
		with open(image_path, "rb") as image:
			return HttpResponse(image.read(), content_type="image")
