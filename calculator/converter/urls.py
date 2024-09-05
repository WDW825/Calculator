from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.converter_main, name='converter_main'),
    path('convert', views.converter_page, name='converter_page')
]
