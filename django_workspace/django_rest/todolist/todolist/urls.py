
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todos import api

router = routers.DefaultRouter()
router.register(r'todos', api.TodoViewSet)

urlpatterns = [
    # path('admin/', admin.site.urls), # django 에서 제공하는 admin
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')) # rest에서 제공하는 admin
    path('api/',include(router.urls)),
]
