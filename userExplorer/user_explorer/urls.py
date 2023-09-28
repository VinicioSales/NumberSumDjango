from django.urls import path
from .views import sum

urlpatterns = [
    path('sum/', sum, name='sum'),
]
