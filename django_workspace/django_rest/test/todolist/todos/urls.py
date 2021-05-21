from django.urls import path
from . import views

# API 명세
# 투두 전체 조회    | GET    | todos/
# 투두 단건 조회    | GET    | todos/{pk}/
# 투두 생성        | POST   | todos/{pk}/
# 투두 수정        | PUT    | todos/{pk}/
# 투두 제거        | DELETE | todos/{pk}/

urlpatterns = [
    path('', views.todoList, name="todoList"),
    path('<str:pk>/', views.todoDetail, name="todoDetail"),
]