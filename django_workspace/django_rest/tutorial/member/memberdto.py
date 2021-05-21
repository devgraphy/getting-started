from rest_framework import serializers
from .models import Member
# Serializer
class MemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Member
        fields = ['id','name', 'email']  # fields = '__all__'. 가독성을 위해서 일일이 작성하는 것을 권장. id처리하는 방법이 다름
