""" 기본 개념
- 각각의 모델은 파이썬의 클래스로, 하위 클래스인 django.db.models.Model에 속한다.
- 일반적으로, 각각의 모델은 하나의 데이터베이스 테이블에 매핑된다.
- 그 안에 변수를 선언할 수 있는데, 그 변수들은 모델에서 DB 속성을 표현한다.
- 모델의 각 속성은 데이터베이스 field를 나타낸다.
- 장고는 자동으로 생성되는 database-access API를 제공한다. (https://docs.djangoproject.com/en/3.1/topics/db/queries/)
"""

""" Creating objects
"""
""" Saving changes to objects
"""
""" Retrieving objects
"""
""" Creating objects
"""

from django.db import models

# Create your models here.
class Todo(models.Model):   # table 명 Todo
    # DB에 반영할 column list 작성
    objects = models.Manager() # all, get 메서드
    content = models.CharField(max_length=255)