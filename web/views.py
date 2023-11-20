from django.http import JsonResponse
from django.shortcuts import render
from .models import Dashboard

# Create your views here.
def index(request):
    return  render(request, 'index.html')

def list_taller(request):
    taller=list(Dashboard.objects.values())
    data = {
        'taller': taller
    }
    return JsonResponse(data)