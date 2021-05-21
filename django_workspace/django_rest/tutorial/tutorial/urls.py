"""
* django rest framework에서는 rest api를 쉽게 작업할 수 있는 view를 제공한다.
* localhost:8000 으로 접속하여 다음을 확인한다.
    * content-type, vary에 members 정의
    * members 클릭하면 MemberViewSet이 응답
* end-user는 이와 같은 json 데이터를 react에서 받아서 원하는 형태로 rendering 하는 것!
* router.register에 등록한 것에 따라 router.urls의 변화를 확인
* app_name은 하나의 viewset(members) 을 두고 api이름으로 구분하고 싶은 경우 사용한다.
    * app_name에 명시한 애플리케이션인 경우 아래의 특정 path에 응답하도록 설정할 수 있다.
    * `8000/members/` 와 `8000/api/v1/member`의 결과는 같다
* web에서 서비스하는 url인지 rest의 데이터인지 구분하기 위해서 api를 url name으로 보통 삽입한다.
"""
"""
- django framework와 django rest framework는 요청, 응답된 데이터를 표현하는 자체 UI 사이트를 제공한다.
- 프론트엔드 개발자가 백엔드에서 넘어온 데이터를 쉽게 보는 용도로 사용한다.
- 이를 사용하지 않은면 단순 텍스트형태의 json으로 보여진다.
- 데이터 표현을 위한 UI를 위해 swagger, postman 이라는 별도의 툴을 사용하기도 한다.
- swagger는 python 외 다른 언어에서도 많이 사용된다.
"""

from django.contrib import admin
from django.urls import path, include





# router = routers.DefaultRouter() # rest에서 제공하는 router를 default router로 정의
# router.register(r'members', views.MemberViewSet) # router에 view 등록. r은 정규식 문법
                                                # 서비스되는 API 등록
                                                # members라고 들어오는 것은 MemberViewSet이 응답
                                                # members는 다른 것으로 변경 가능


# app_name='member'                                            
urlpatterns = [
    path('admin/', admin.site.urls), # django 프로젝트에서 제공하는 admin 사이트
    path('api/members/', include('member.urls')),

    # path('api', include(router.urls)), # viewset을 보여주는 router.urls이 응답
    # path('', include((router.urls, 'member'), namespace='api')), # v1 뒤에 '/' 반드시 붙여야 한다. # app_name과 같이 사용
    # path('api_admin/', include('rest_framework.urls', namespace='rest_framework')) # rest framework에서 제공하는 admin 페이지. #admin.site.urls와 같기 때문에 둘 중에 아무거나 사용 # 보통은 버전 명시
]
