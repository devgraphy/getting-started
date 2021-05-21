# 입력데이터 valid 체크
# valid 하면 service에 비즈니스 로직을 호출
# 화면에 뿌려야 하는 데이터를 리턴할 게 있다면 view(template) 선택
# 비즈니스 로직을 제외하면 반복되는 부분이 많고 이를 라이브러리화 하는 것이고, 라이프사이클까지 관리한다면 프레임워크화 되는 것임

from service.student_service import StudentService
from view_template.template_view import message_display, list_display

class StudentController:
    def register(self, student):  # service.register()의 인자 참고
        # 만약 id가 email 형식이면 email 맞는지 student.id valid 체크
        service = StudentService()  
        bm = service.register(student)  # 비즈니스 메서드 호출
        message_display(bm)             # View select
               

    def getAllStudents(self):
        service = StudentService()
        students = service.getAllStudents() # 비즈니스 메서드 호출
        list_display(students)     # 데이터 저장해서 view select

    def update(self, id, major):
        # id, major valid check
        if id == "" or major == "":
            message_display("아이디와 전공 데이터 입력이 필요합니다.")
        service = StudentService()
        message = service.update(id, major)
        message_display(message)

    def remove(self, id):
        if id == "":
            message_display("아이디와 전공 데이터 입력이 필요합니다.")
        service = StudentService()
        message = service.remove(id)
        message_display(message)

    def file_read(self):
        service = StudentService()
        service.file_read()

    def file_write(self):
        service = StudentService()
        service.file_write()



