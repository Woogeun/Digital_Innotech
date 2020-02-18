from django.contrib import admin
from .models import *

# Home
admin.site.register(Home)

# CTO
admin.site.register(Education)
admin.site.register(Career)
admin.site.register(Message)
admin.site.register(Profile)

# History
admin.site.register(History)

# Introduction
admin.site.register(PdfImage)
admin.site.register(Pdf)

# News
admin.site.register(News)
