from django.db import models

class ImageDetection(models.Model):
	title = models.CharField(max_length=30)
	content = models.TextField()
	def __str__(self):
		return self.title

class VideoDetection(models.Model):
	title = models.CharField(max_length=30)
	content = models.TextField()
	def __str__(self):
		return self.title

class Network(models.Model):
	image = models.ImageField(upload_to='assets/image')



