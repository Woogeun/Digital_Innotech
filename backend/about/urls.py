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
    path('cto/title/', views.returnTitleCTO),

    # History
    path('history/history/', views.returnHistory),
    path('history/title/', views.returnTitleHistory),

    # Introduction
    path('introduction/pdfimage/', views.returnPdfImage),
    path('introduction/pdf/', views.returnPdf),
    path('introduction/title/', views.returnTitleIntroduction),

    # News
    path('news/news/', views.returnNews),
    path('news/title/', views.returnTitleNews),
]   




