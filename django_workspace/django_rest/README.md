# REST 개발 환경 구축

## 파이썬 가상 환경 구축

`pip install virtualenv`

현재 폴더 내 ./venv/Scripts/activate.bat 실행

(venv) 프롬프트 확인



### *이후 모든 과정은 가상환경에서 수행한다*

## 장고 설치하기

`pip install django`

`pip list` 로 django 설치 확인



## django 프로젝트 생성

이름이 tutorial인 django 프로젝트 생성

`django-admin startproject tutorial`



## 올바른 프로젝트 생성 확인

python manage.py runserver



## application 생성

이름이 member인 application 생성

`python manage.py startapp member`

⭐프로젝트 구조 이해하기



## settings.py에 실행할 앱 추가

```python
INSTALLED_APPS = [
	...
    'rest_framework',
    'member',
]
```



기존 방식과 달라지는 부분

views.py - 직렬화 적용

urls - rest에서 제공하는 router 사용



## SQLITE DB 사용하기

`python manage.py dbshell`





`python manage.py shell`

​	from member.models import Member

​	Member.objects.create(name="hong", email="hong@multi.com")





## 파이썬 명령어 실행하기

`python manage.py shell`













# views.py 에 REST적용하여 변경하기

직렬화하여 제공할 데이터를 정의

viewset 정의







# serializer

json형태로 응답을 해야한다.

프론트에서는 django object를 인식하지 못한다.

serializer는 django object를 key,value 로 매핑된 텍스트로 바꿔주는 역할을 한다.

해당 framework에 어떤 데이터를 직렬화할 것인지 정의만 해주면 된다.







# 스웨거

단위 테스트할 때 사용되기도 함











django 와 rest 프레임워크의 차이는

화면을 제공하느냐 데이터를 제공하느냐의 차이



modelserializer

hyperlinkedmodelserializer



여러 serializer의 api를 참조해서 적절한 serializer를 사용해야 한다.





django-admin 명령어

https://docs.djangoproject.com/en/3.1/ref/django-admin/



















# Issue

## CommandError: You appear not to have the 'sqlite3' program installed or on your path.

*`python manage.py dbshell` 실행 중 발생*

```
일단 기본적으로 venv 환경에서 sqlite3는 별도로 설치할 필요가 없다.
venv환경에서 실행되는 python 버전이 3.9 이상인지 확인하면 된다고 한다.
3.9.1이지만 여전히 이 문제는 없어지지 않는다.
이 문제는 별도로 sqlite3를 별도 설치하여 path를 추가함으로써 해결했다.
python 버전 충돌 문제 등이 제기되었지만 아직 어떠한 실마리를 찾지 못했다.
```



1. [SQLite Download Page](https://www.sqlite.org/download.html) 에서 **Precompiled Binaries for Windows** 항목의 [sqlite-tools-win32-x86-3350100.zip](https://www.sqlite.org/2021/sqlite-tools-win32-x86-3350100.zip) 을 다운받는다.
2. sqlite3를 manage.py가 속해있는 폴더에 추가한다.

*근데 매번 수동으로 추가해줘야해? 아니!!!!* 

3. sqlite3 가 존재하는 디렉터리 위치를 path에 추가시켜 준다.



## ModuleNotFoundError: No module named 'rest_framework'

*`python manage.py dbshell` 실행 중 발생*

문제 상황: settings.py 의 INSTALLED_APPS에서 인식하지 못함

`pip install djangorestframework`

`pip list` 를 통해 djangorestframework 설치 확인







## ModuleNotFoundError: No module named 'django'

```
(venv) C:\Users\albei\cloud-msa\django_workspace\django_rest\todolist>python manage.py dbshell
Traceback (most recent call last):
  File "C:\Users\albei\cloud-msa\django_workspace\django_rest\todolist\manage.py", line 11, in main
    from django.core.management import execute_from_command_line
ModuleNotFoundError: No module named 'django'
```

`pip install django`

`pip list`를 통해 django 설치 확인



