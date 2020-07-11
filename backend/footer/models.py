from django.db import models

class Contact(models.Model):
	content = models.TextField()

	def __str__(self):
		return self.content

class Pdf(models.Model):
	pdf = models.FileField(upload_to='assets/pdf')

	