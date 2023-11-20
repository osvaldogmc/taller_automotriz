from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('list_taller/', views.list_taller, name='taller'),
]