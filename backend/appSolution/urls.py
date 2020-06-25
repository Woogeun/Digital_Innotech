from django.urls import path

from . import views

urlpatterns = [
    path('temp/title/', views.returnTitleTemp),
    path('temp/img/', views.returnImageTemp),
]