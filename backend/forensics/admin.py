from django.contrib import admin
from .models import *

# Technique
admin.site.register(Why)
admin.site.register(How)
admin.site.register(Now)
admin.site.register(Image)
admin.site.register(TitleTechnique)

# Paper
admin.site.register(Journal)
admin.site.register(Conference)
admin.site.register(TitlePaper)


