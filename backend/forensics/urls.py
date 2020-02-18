from django.urls import path

from . import views

urlpatterns = [
	# Technique
    path('technique/why/', views.returnWhy),
    path('technique/how/', views.returnHow),
    path('technique/now/', views.returnNow),
    path('technique/image/', views.returnImage),

    # Paper
	path('paper/journal/', views.returnJournal),
	path('paper/conference/', views.returnConference),    
]




