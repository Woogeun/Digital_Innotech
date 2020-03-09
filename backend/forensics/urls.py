from django.urls import path

from . import views

urlpatterns = [
	# Technique
    path('technique/why/', views.returnWhy),
    path('technique/how/', views.returnHow),
    path('technique/now/', views.returnNow),
    path('technique/image/', views.returnImage),
    path('technique/title/', views.returnTitleTechnique),

    # Paper
	path('paper/journal/', views.returnJournal),
	path('paper/conference/', views.returnConference),
	path('paper/title/', views.returnTitlePaper),
]




