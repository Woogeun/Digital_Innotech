from django.db import models

class TitleTemp(models.Model):
	content = models.TextField()

class ImageTemp(models.Model):
	image = models.ImageField(upload_to='assets/image')
