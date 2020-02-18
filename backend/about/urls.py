from django.urls import path

from . import views

urlpatterns = [
	# Home
	path('home/', views.returnHome),

    # CTO
    path('cto/education/', views.returnEducation),
    path('cto/career/', views.returnCareer),
    path('cto/message/', views.returnMessage),
    path('cto/profile/', views.returnProfile),

    # History
    path('history/history/', views.returnHistory),

    # Introduction
    path('introduction/pdfimage/', views.returnPdfImage),
    path('introduction/pdf/', views.returnPdf),

    # News
    path('news/news/', views.returnNews),
]   




