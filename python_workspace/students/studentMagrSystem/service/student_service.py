# 비즈니스 로직 처리
# CRUD 등
# student_function_io 에서 카피. students 전역 변수는 클래스 안에 들어오면 static변수(클래스 변수)

from exception.duplicate_exception import DuplicateException
from exception.idnotfound_exception import IDNotFoundException
from python_workspace.students.studentMagrSystem.exception.idnotfound_exception import IDNotFoundException
from dao.file_dao import save_list, init_data_load

class StudentService:
    students=[] # 클래스 변수: 프로그램 시작 시 파일에서 딱 한번 로드되면 된다. 그래서 클래스 변수로 선언
                # 생성할 때마다 각 객체마다 로드되야 한다면 __init__에서 초기화한다.
    
    # 수강생 등록 :  list students에 id중복체크하고 존재하지 않는 경우 정보 저장하고 message 리턴,
    # 존재하는 경우 DuplicationException 발생
    def register(self, student):
        index = is_exist(student.id)
        if index < 0 :
            StudentService.students.append(student)
            return "{0}(이)가 등록되었습니다.".format(student.name)
        else:
            try:
                raise DuplicateException(student.id) 
            except DuplicateException as inputError:
                return str(inputError)
            

    # 수강생 목록 : list students 목록 리턴
    def getAllStudents(self):
        return StudentService

    # 수강생 수정 : 
    def update(self, id, major):
        index = is_exist(id)
        if index > -1 :
            students[index].major = major
            return "{0}의 전공 정보가 수정되었습니다.".format(id)
        else:
            try:
                raise IDNotFoundException(id)
            except IDNotFoundException as updateError:
                return str(updateError)

    # 수강생 삭제: id를 검색해서 수강생 정보 삭제 message 리턴
    # 존재하지 않는 경우 idnotfoundexception 발생

    def remove(self, id):
        index = is_exist(id)
        if index > -1:
            students.pop(index)
            return "{0} 정보를 삭제했습니다.".format(id)
        else:
            try:
                raise IDNotFoundException(id)
            except IDNotFoundException as removeError:
                return str(removeError)

    #수강생 존재 여부 : id 검색해서 list students의 index 값 리턴
    def is_exist(self, id):
        pass

    def file_read(self):
        StudentService.students = init_data_load()

    def file_write(self):
        save_list(StudentService.students)
    
