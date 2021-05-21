"""
* quickstart에서는 serializers.py 로 별도로 작성한다.
* 기존의 views와 차이점을 안다.
    * template을 선택해서 rendering 하는게 아니라
    * 응답할 모델 객체에 대해서 직렬화할 데이터를 정의해주고 viewset을 명시해준다.
* serializers와 viewsets 은 rest_framework 를 통해서 import 한다.(REST로 개발하면서 바뀐 부분)
* serializer와 viewset의 상속받는 인자를 확인한다.
* serializer
    * fields의 값으로 구체적인 필드와 __all__ 중에서 가독성을 위해서 구체적인 필드를 명시하는 것을 권장한다.
    * '__all__' 로 명시한 경우 해당되는 값이 무엇인지 또 찾아봐야 하기 때문이다.
    * '__all__' 로 명시한 경우 id 대신 url이 추가된다.
    * 나중에 json으로 받았을 때 고유값을 사용하려면 url을 별도로 parsing해야 한다.
    * 통신하기 위한 데이터와 내부에서 로직을 처리하기 위한 데이터를 구분하여 명시해준다.

* viewset
    * object.all()로 받은 파이썬 객체를 serializer에 명시한 속성들로 key, value 형태의 json object로 변환시켜주고
    * 네트워크를 통해서 요청한 url의 client proxy에 전달하고 proxy에서 프론트로 전달되는 흐름이다.

"""
"""
* serializer를 사용해 데이터 삽입하기
>>> from member.models import Member
>>> from member.views import MemberSerializer
>>> from rest_framework.renderers import JSONRenderer
>>> from rest_framework.parsers import JSONParser
>>> member = Member(name="abc", email="abc@gmail.com")
"""
from django.shortcuts import render
from .models import Member
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import serializers, viewsets

# serializer: django object를 json같은 데이터 표현을 위해 사용할 데이터를 정의한다.
class MemberSerializer(serializers.HyperlinkedModelSerializer): # 상속받는 것에 주목
    class Meta:
        model = Member # model 클래스명
        fields = ['id','name', 'email'] # 직렬화할 model의 속성 cf) field = '__all__'

# viewset
class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()     # python 객체
    serializer_class = MemberSerializer # 직렬화된 데이터를 넘겨준다.
