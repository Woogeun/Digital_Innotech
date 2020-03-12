from django.db import models

# CTO
class Education(models.Model):
	def create(cls, content):
		return cls(content=content)
	content = models.TextField()

class Career(models.Model):
	def create(cls, content):
		return cls(content=content)
	content = models.TextField()

class Message(models.Model):
	def create(cls, content):
		return cls(content=content)
	content = models.TextField()

class Profile(models.Model):
	def create(cls, content):
		return cls(image=content)
	image = models.ImageField(upload_to='assets/image')

class Home(models.Model):
	def create(cls, content):
		return cls(image=content)
	image = models.ImageField(upload_to='assets/image')

class TitleCTO(models.Model):
	def create(cls, content):
		return cls(content=content)
	content = models.TextField()


# History
class History(models.Model):
	def create(cls, year, content):
		return cls(year=year, content=content)
	year = models.IntegerField()
	content = models.TextField()

class TitleHistory(models.Model):
	def create(cls, content):
		return cls(content=content)
	content = models.TextField()

	
# Introduction
class PdfImage(models.Model):
	def create(cls, content):
		return cls(image=content)
	image = models.ImageField(upload_to='assets/image')

class Pdf(models.Model):
	def create(cls, content):
		return cls(pdf=content)
	pdf = models.FileField(upload_to='assets/pdf')

class TitleIntroduction(models.Model):
	def create(cls, content):
		return cls(content=content)
	content = models.TextField()


# News
class News(models.Model):
	def create(cls, date, content):
		return cls(date=date, content=content)
	date = models.TextField()
	content = models.TextField()

class TitleNews(models.Model):
	def create(cls, content):
		return cls(content=content)
	content = models.TextField()


