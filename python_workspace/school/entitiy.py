# 클래스 내부 함수__init__ 메서드(매직메서드)작성해보기
# 매직메서드를 수정해서 사고싶다면
# 부모 클래스(super class):attribute와 operation을 자식 클래스(sub class)에서 사용 허용 : 상속
# 클래스는 새로운 클래스를 만들어내는 메커니즘이라고도 한다.

class Person:
    def __init__(self, id, name): # Person() : 생성자 호출 시 내부적으로 호출
        self.id = id              # 객체 생성 시 초기화 구현
        self.name = name          # {"id": id, "name":name}

    def info(self):               #객체 operation : member method
        print("아이디: {0} 이름: {1} ".format(self.id, self.name), end = " ")
    
    # object 클래스의 __str__ 재정의
    def __str__(self):
        return "아이디: {0} 이름: {1} ".format(self.id, self.name)

    # object 클래스의 __eq__ 재정의
    def __eq__(self, id):
        if self.id == id:
            return

# Person의 sub 클래스: Student
class Student(Person):
    def __init__(self, id, name, major):
        super().__init__(id, name)  # 수퍼 클래스의 생성자 호출
        self.major = major

    def info(self): # Person info override -> 재사용성 향상 = 다형성
        super().info()              # 수퍼 클래스의 메서드 호출
        print("전공:{0} ".format(self.major))

    # __str__ 재정의(override)
    def __str__(self):  # 객체 자체 출력 시 호출
        return super().__str__()+" 전공:{0} ".format(self.major)

# Person의 sub 클래스: Teacher
class Teacher(Person):
    def __init__(self,id,name,subject):
        super().__init__(id,name)
        self.subject = subject
        
    def info(self): # Person info override
        super().info()
        print("과목: {0}".format(self.subject))

    def __str__(self):  # 객체 자체 출력 시 호출
        return super().__str__()+"과목:{0} ".format(self.subject)

# Person의 sub 클래스: Employee
class Employee(Person):
    def __init__(self, id, name, department):
        super().__init__(id, name)
        self.department = department

    def info(self): # Person info override
        super().info()
        print("부서:{0}".format(self.department))

    def __str__(self):  # 객체 자체 출력 시 호출
        return super().__str__()+"부서:{0} ".format(self.department)



#사용자 코드
#객체 생성 : class_이름([인자 리스트...])
student = Student("CMSA07","박기윤","정보통신") # __init__ 인자에 매칭하는 값
student2 = Student("CMSA07","박기윤","정보통신")
teacher = Teacher("T001","박성민","함수형프로그래밍")
employee = Employee("E001","심아윤","연구소")

#isInstance
# print("isinstance student Student: ", isinstance(student,Student))
# print("isinstance student Student: ", isinstance(student,Teacher))
# print("isinstance student Student: ", isinstance(student,Person))

# 객체 사용: object_이름.멤버변수, object_이름.멤버메서드([인자 리스트...])
# 사용자는 표준을 보고 쓰는데, 각각 원하는 객체에 부합하는 정보를 얻을 수 있다.
# 다형성 : 한 가지 타입으로 여러 형태 사용 예) Person 타입의 Student, Teacher, Employee
#   super에서 제공되는 메서드를 sub에서 재정의할 수 있다.
#   사용자가 표준인 super 형태로 메서들 호출하더라도 재정의된 sub의 method가 다양하게 응답될 수 있다.
# 수퍼 클래스는 사용법에 대한 표준을 제공한다.

student.info()  # student.student_info 형태에 다형성 적용
teacher.info()
employee.info()

# __str__
# 객체 출력 - 최상위 object class의 __str__ 호출
#
print(student) # __main__: 엔트리 포인트
print(teacher) # object at : 객체 위치
print(employee) # 데이터 출력하려면 재정의 필요

# eq
# 기본적으로 주소가 다른 경우 다른 객체로 인식한다.
# 사용자가 정의하여 id가 다른 경우에 다른 객체로 인식하도록 구현할 수 있다.
# 즉, 재정의(override)하면 된다!
# __eq__ 재정의하기 전 객체의 주소값 비교 : student != student2
# __eq__ 재정의 후 객체의
if student == student2:
    print("student == student2") # X
else:
    print("student != student2") # O
