"""
* models.Manager()
- 장고 models에 데이터베이스 쿼리 연산이 제공되는 인터페이스
- 장고 앱에서 model 마다 적어도 하나의 Manager가 존재한다.
- 기본적으로 장고는 모든 장고 model class에 'objects'이름으로 Manager를 추가한다.
- 필드 이름을 objects 사용하거나, Manager를 objects가 아닌 다른 이름으로 명명할 수 있다.
- Member.objects.all() 은 Member 객체의 모든 리스트를 반환한다.
"""

from django.db import models
from django.db.models.fields import CharField

# Create your models here.

class Member(models.Model):
    objects = models.Manager() 
    name = CharField(max_length=200)
    email = CharField(max_length=200)
