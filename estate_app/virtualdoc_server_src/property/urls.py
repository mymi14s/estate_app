from django.urls import path
from .views import (
    propertylist, propertydetail, propertycreate,
)

app_name = 'property'

urlpatterns = [
    path('propertylist/', propertylist, name='propertylist'),
    path('propertycreate/', propertycreate, name='propertycreate'),
    path('propertydetail/<name>/', propertydetail, name='propertydetail')
]
