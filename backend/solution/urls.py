from django.urls import path

from . import views

urlpatterns = [
    # KAI_Forensics
    path('kaiforensics/imagedetection/', views.returnImageDetection),
    path('kaiforensics/videodetection/', views.returnVideoDetection),
    path('kaiforensics/network/', views.returnNetwork),
]




