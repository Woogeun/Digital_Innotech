from django.db import models

class Logo(models.Model):
	title = models.CharField(max_length=30)
	image = models.ImageField(upload_to='assets/image')

	def __str__(self):
		return self.title