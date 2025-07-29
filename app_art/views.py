from django.shortcuts import render
from django.http import JsonResponse

def index(request):
    return render(request, 'app_art/index.html')



def health_check(request):
    return JsonResponse({"status": "ok"})