from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .tododto import TodoSerializer
from .models import Todo

# GET - 투두 전체 조회
# POST - 투두 생성
@api_view(['GET','POST'])
def todoList(request):
    if request.method == 'GET':
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)

# GET - 투두 단건 조회
# PUT - 투두 수정
# DELETE - 투두 삭제
@api_view(['GET', 'PUT', 'DELETE'])
def todoDetail(request, pk):
    try:
        todo = Todo.objects.get(id=pk)
    except todo.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = TodoSerializer(todo, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TodoSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    elif request.method == 'DELETE':
        todo.delete()
        return Response('일정이 삭제되었습니다.')