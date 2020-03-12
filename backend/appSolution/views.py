from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

from .models import *

@csrf_exempt
def returnTitleTemp(request):
	if request.method == "POST":
		body = json.loads(request.body)
		data_type, mode, content = body['type'], body['mode'], body['content']
		instance = TitleTemp(content=content)
		instance.save()
		return HttpResponse('Success')
	else:
		title = list(TitleTemp.objects.all())[-1].content
		return HttpResponse(title)

