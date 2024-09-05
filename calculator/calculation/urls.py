from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.main_page, name='home'),
    path('converter', include('converter.urls'))
]