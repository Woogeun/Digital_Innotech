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
		valid_image = list(Logo.objects.all())[-1].image.path

		try:
			with open(valid_image, "rb") as f:
				return HttpResponse(f.read(), content_type="image/jpeg")

		except IOError:
			red = Image.new('RGBA', (1, 1), (255,0,0,0))
			response = HttpResponse(content_type="image/jpeg")
			red.save(response, "JPEG")

		return response
