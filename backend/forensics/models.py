from django.db import models

# Technique
class Why(models.Model):
	content = models.TextField()

class How(models.Model):
	content = models.TextField()

class Now(models.Model):
	content = models.TextField()

class Image(models.Model):
	image = models.ImageField(upload_to='assets/image')


# Paper
class Journal(models.Model):
	content = models.TextField()

class Conference(models.Model):
	content = models.TextField()

