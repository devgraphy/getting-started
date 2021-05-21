# MODEL은 기존과 REST는 다를 바 없음
from django.db import models

# Create your models here.
class Member(models.Model):
    objects = models.Manager()  # views에서 object API를 통해 받아올 때 에러 방지
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    """
    # model 생성 후 즉석에서 데이터 삽입하기
    `python manage.py shell` 입력
    from member.models import Member
    Member.objects.create (name="hong", email="hong@multi.com")
    
    # objects 클래스를 통해 확인
    `Member.objects.all()
    # sqlite3에 접속하여 데이터 삽입 여부 확인
    `python manage.py dbshell` 입력
    `.tables` 테이블 확인
    `select * from <table명>`;
    """
    """
    * models.Manager()
    - 장고 models에 데이터베이스 쿼리 연산이 제공되는 인터페이스
    - 장고 앱에서 model 마다 적어도 하나의 Manager가 존재한다.
    - 기본적으로 장고는 모든 장고 model class에 'objects'이름으로 Manager를 추가한다.
    - 필드 이름을 objects 사용하거나, Manager를 objects가 아닌 다른 이름으로 명명할 수 있다.
    - Member.objects.all() 은 Member 객체의 모든 리스트를 반환한다.
    - https://docs.djangoproject.com/en/3.1/topics/db/managers/
    """
    """
    model에 대해서 초기 migration을 생성하고 처음으로 데이터베이스와 동기화할 필요가 있다.
    python manage.py makemigrations Member
    python manage.py migrate
    """