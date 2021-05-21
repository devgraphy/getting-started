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
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .memberdto import MemberSerializer
from .models import Member
# from rest_framework import serializers, viewsets

# serializer: django object를 json같은 데이터 표현을 위해 사용할 데이터를 정의한다.
# class MemberSerializer(serializers.HyperlinkedModelSerializer): # 상속받는 것에 주목
#     class Meta:
#         model = Member # model 클래스명
#         fields = ['id','name', 'email'] # 직렬화할 model의 속성 cf) field = '__all__'

# viewset
# class MemberViewSet(viewsets.ModelViewSet):
#     queryset = Member.objects.all()     # python 객체
#     serializer_class = MemberSerializer # 직렬화된 데이터를 넘겨준다.
"""
*ViewSet 정의 방법
- update, retrieve, delete를 MemberViewSet 안에서 함수로 정의하기도 한다.
- 이 경우엔 django framework와 비슷하게 member app에서 urls.py를 통해 해당 함수와 매핑을 해준다.
- https://www.django-rest-framework.org/api-guide/viewsets/
"""
#-----------------------------------------------------------------------------

# decorator 활용
@api_view(['GET'])
def memberList(request):
    members = Member.objects.all()
    serializer = MemberSerializer(members)
    return Response(serializer.data)

@api_view(['GET'])
def memberDetail(request, pk):
    member = Member.objects.get(id=pk)
    serializer = MemberSerializer(member)
    return Response(serializer.data)

@api_view(['DELETE'])
def memberDelete(request, pk):
    member = Member.objects.get(id=pk)
    member.delete()
    return Response('Deleted!!')

@api_view(['POST'])
def memberUpdate(request, pk):
    member =Member.objects.get(id=pk)
    serializer = MemberSerializer(instance=member, data=request.data)
    serializer.save()
    member.update()
    return Response(serializer.data)

@api_view(['POST'])
def memberCreate(request):
    serializer = MemberSerializer(data=request.data)
    if(serializer.is_valid()) :
        serializer.save()
    return Response(serializer.data)
