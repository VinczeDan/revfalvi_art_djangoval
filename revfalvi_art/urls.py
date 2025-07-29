
from django.contrib import admin
from django.urls import path
from django.urls import include
from app_art import views
from django.conf import settings
from django.conf.urls.static import static
from app_art.views import index, health_check

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('health/', health_check, name='health-check'),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
