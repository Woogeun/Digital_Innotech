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

class TitleCTO(models.Model):
	content = models.TextField()


# History
class History(models.Model):
	year = models.IntegerField()
	content = models.TextField()

class TitleHistory(models.Model):
	content = models.TextField()

	
# Introduction
class PdfImage(models.Model):
	image = models.ImageField(upload_to='assets/image')

class Pdf(models.Model):
	pdf = models.FileField(upload_to='assets/pdf')

class TitleIntroduction(models.Model):
	content = models.TextField()


# News
class News(models.Model):
	date = models.TextField()
	content = models.TextField()

class TitleNews(models.Model):
	content = models.TextField()


