"""
* serializer를 사용해 데이터 삽입하기
>>> from member.models import Member
>>> from member.views import MemberSerializer
>>> from rest_framework.renderers import JSONRenderer
>>> from rest_framework.parsers import JSONParser
>>> member = Member(name="abc", email="abc@gmail.com")
"""


from django.shortcuts import render
from rest_framework import serializers, viewsets
from .models import Member
# Create your views here.

# serializer
class MemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Member
        fields = ["name", "email"]

# viewset
class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer