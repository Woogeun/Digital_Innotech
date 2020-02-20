from django.db import models

# Technique
class Why(models.Model):
	title = models.CharField(max_length=30)
	content = models.TextField()

class How(models.Model):
	title = models.CharField(max_length=30)
	content = models.TextField()

class Now(models.Model):
	title = models.CharField(max_length=30)
	content = models.TextField()

class Image(models.Model):
	image = models.ImageField(upload_to='assets/image')


# Paper
class Journal(models.Model):
	content = models.TextField()

class Conference(models.Model):
	content = models.TextField()

