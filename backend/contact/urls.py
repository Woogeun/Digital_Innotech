from django.urls import path

from . import views

urlpatterns = [
    path('contact/', views.returnContact),
    path('title/', views.returnTitle),
]