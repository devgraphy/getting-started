from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todos import api

router = routers.DefaultRouter()
router.register(r'todos', api.TodoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # path('admin/', admin.site.urls),
    path('api/todos/', include('todos.urls')),
]
