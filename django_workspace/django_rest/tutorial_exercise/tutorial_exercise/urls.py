

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from member import views


# router = routers.DefaultRouter()
# router.register(r'members', views.MemberViewSet)

# app_name='member' 
urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include((router.urls, 'member'), namespace='api'))
    path('api/members/', include('member.urls')),
]
