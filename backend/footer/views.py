from django.http import HttpResponse, HttpRequest
from datetime import datetime
from django.views.decorators.csrf import csrf_exempt
import json

from .models import Contact

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





		