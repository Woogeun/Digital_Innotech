from django.contrib import admin
from .models import *

# Home
admin.site.register(Home)

# CTO
admin.site.register(Education)
admin.site.register(Career)
admin.site.register(Message)
admin.site.register(Profile)
admin.site.register(TitleCTO)

# History
admin.site.register(History)
admin.site.register(TitleHistory)

# Introduction
admin.site.register(PdfImage)
admin.site.register(Pdf)
admin.site.register(TitleIntroduction)

# News
admin.site.register(News)
admin.site.register(TitleNews)
