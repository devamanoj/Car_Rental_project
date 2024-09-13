# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import DriverViewset
 
# router = DefaultRouter()
# router.register('', DriverViewset, basename='driver')
# app_name ='DriverApp'
 
# urlpatterns=[
#     path('', include(router.urls)),
# ]

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DriverViewSet

router = DefaultRouter()
router.register(r'drivers', DriverViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
