# import entity(DTD).student (O_O)? 에러나는 이유는???
# from entity(DTD) import # 37:00 pylint 확장에서 컴파일 에러로 잡음 -> 
from entity.student import Student

# menu display
def menu_display():
    print("1. 수강생 정보 등록\n2. 수강생 목록 보기\n3.수강생 정보 수정\n4.수강생 정보 삭제\n5.모두 삭제\n0.종료")

def menu_select():
    menu = input("메뉴를 선택하세요: ")
    return menu

# message display
def message_display(message):
    print(message)

# list display
def list_display(students):
    print("===== 수강생 목록 =====")
    for student in students:
        print(student) # 기본적으로 객체이므로 주소값을 출력하게 됨. Student 클래스에서 재정의한 __str__ 이 출력됨

# Student input display
def input_display():
    id = input("아이디: ")
    name = input("이름: ")
    age = input("나이: ")
    while not age.isdecimal() :
        print("나이는 숫자로 입력해 주세요.\n")
        age = input("나이: ")
    major = input("전공:")
    return Student(id, name, int(age), major) # 같은 디렉토리에 없기 때문에 클래스 import 필요
                                              # 전달할 때 타입 캐스팅해야 여러번 처리할 필요 없지

# Update input display
def update_display():
    id = input("수정할 수강생 번호")                   
    major = input("수정할 전공 : ")
    return (id, major)
