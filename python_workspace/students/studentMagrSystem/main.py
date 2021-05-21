from controller_view.student_controller import StudentController
from view_template.template_view import menu_display, menu_select, message_display, input_display, update_display, delete_display

controller = StudentController()

controller.file_read()
while True:
    menu_display()
    print("===== Cloud MSA 반 수강생 관리 시스템 =====")
    print("1. 수강생 정보 등록\n2. 수강생 목록 보기\n3.수강생 정보 수정\n4.수강생 정보 삭제\n5.모두 삭제\n0.종료")
    menu = menu_select()
    if menu == '1':
        student = input_display()
        controller.register(student)
        
    elif menu == '2':
        controller.getAllStudent()

    elif menu == '3':
        id, major = update_display()
        controller.update(id, major)    # view_select도 포함됨
        
    elif menu == '4':
        id = delete_display()
        controller.remove(id)

    # elif menu == '5':
        # students.clear() # 왜 안먹히지??

    elif menu == '0':
        message_display("수강생 관리 프로그램을 종료합니다.")
        controller.file_write()
        break
    else:
        print("다시 입력하세요.\n")


        # todo_function_io 버전 refactoring
        # todoMgrSystem 폴더 생성
        # entity, view, controller, service, dao, exception package 생성: 폴더 생성 __init__.py 파일 생성
        # 역할 별로 구현: entity, controller, service, exception class 선언. view, dao 등은 함수로만 구성
        # todoMgrSystem/ main.py 테스트
        # todoMgrSystem
        #       |--main.py
        #       |--view
        #           |--view.py (menu_display, input display, list_display,...)
        #       |--entity
        #           |--todo.py(class Todo)
        #       |--controller
        #           |--todo_controller.py(class TodoController
        #       |--service
        #           |--todo_service.py(class TodoService)
        #       |--dao
        #           |--todo_file.py(file_read, file_write)

