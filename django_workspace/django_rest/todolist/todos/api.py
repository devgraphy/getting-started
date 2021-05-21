# serializer 작성
# serialzier를 기반으로한 view 작성

from rest_framework import serializers, viewsets
from .models import Todo

class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ['id', 'title'] # all 하면 url이 넘어감

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer # Meta데이터 가지고 있는 serializer를 받음

