
from django.contrib import admin
from django.urls import path, include
# from rest_framework import routers
# router = routers.DefaultRouter()
# router.register(r'todos', api.TodoViewSet)

urlpatterns = [
     path('admin/', admin.site.urls),
     path('api/todos/', include('todos.urls')),
]
