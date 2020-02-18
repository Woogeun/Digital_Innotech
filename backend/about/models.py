from django.db import models

# CTO
class Education(models.Model):
	content = models.TextField()

class Career(models.Model):
	content = models.TextField()

class Message(models.Model):
	content = models.TextField()

class Profile(models.Model):
	image = models.ImageField(upload_to='assets/image')

class Home(models.Model):
	image = models.ImageField(upload_to='assets/image')


# History
class History(models.Model):
	year = models.IntegerField()
	content = models.TextField()

	
# Introduction
class PdfImage(models.Model):
	image = models.ImageField(upload_to='assets/image')

class Pdf(models.Model):
	pdf = models.FileField(upload_to='assets/pdf')


# News
class News(models.Model):
	date = models.TextField()
	content = models.TextField()