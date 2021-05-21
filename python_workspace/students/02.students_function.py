# 기존 01.students.py에서 함수 추출하기

# 수강생 관리 시스템

students=[]
index = 1
# 수강생 등록 : list students 에 정보 저장하고 메시지 리턴
def register(student):
    global index                # [global]solution for: index is unbound(UnboundLocalError: local variable 'index' referenced before assignment)
                                # 자식 클래스 내부에서 부모 클래스로 접근은 super()
    if is_exist(id) < 0:
        student["id"] = index       # 전달받은 딕셔너리 객체에 id 추가(키가 없으면 추가, 있으면 수정)
        students.append(student)    # 딕셔너리 리스트에 추가
        index += index
        return "{0}(이)가 등록되었습니다.".format(student["name"])
    else:
        print("{}가 이미 존재합니다.".format(index))
    

# 수강생 목록 : list studnets 목록 리턴
def getAllStudents():
    return students             # 리스트 리턴

# 수강생 수정 : id를 검색해서 전공정보 수정하고 메시지 리턴, 존재 여부 판단 로직
def update(id):
    num = is_exist(id)
    if num >= 0:
        alterName = input("변경할 이름을 입력하세요: ")
        students[num]["name"] = alterName
        return "{} 학생 번호의 이름이 {} 으로 변경되었습니다.".format(students[num]["id"],students[num]["name"])
    else:
        return "{}는 존재하지 않는 id입니다.".format(num)



# 수강생 삭제 : id를 검색해서 수강생 정보 삭제 메시지 리턴, 존재 여부 판단 로직
def remove(id):
    num = is_exist(id)
    if num > 0:
        for s in students:
            if s['id'] == num:
                students.remove(s)
                return "{} 학생 번호의 정보가 삭제되었습니다.".format(num)
    else:
        return "{} 학생 번호의 정보가 존재하지 않습니다.".format(num)




 
# 수강생 존재여부 : id 검색해서 list students의 index 값 리턴
# update, remove 에서 공통적으로 필요한 기능이기에 공통 모듈로 추출
def is_exist(id):
    # for student in students:
    #     if student["id"] == id:
    #         return True
    # return False

    # enumerate
        # 반복문 사용 시 몇 번째 반복문인지 확인이 필요할 때 사용
        # i 는 0 부터 시작
        # 인덱스 번호와 컬렉션의 원소를 tuple 형태로 반환
        # in 앞에 2개의 변수를 두면 각각 인덱스 번호와 컬렉션의 원소를 나타낸다.
    for i, student in enumerate(students):  
        if student["id"] == id:
            return i # index 정보 반환
    return -1    # 보통 False의 경우, 0보다 작은 값을 리턴하는 경우가 많음.

#menu display - (view) template
def menu_display():
    print("1. 수강생 정보 등록\n2. 수강생 목록 보기\n3.수강생 정보 수정\n4.수강생 정보 삭제\n5.모두 삭제\n0.종료")


#message display - (view) template
def message_display(message=""): 
    print(message)

while True:
    menu_display()
    print("===== Cloud MSA 반 수강생 관리 시스템 =====")
    menu = input("메뉴를 선택하세요")
    if menu == '1':             
        name = input("이름:")                           # 입력화면 제공 시작
        age = input("나이:")
        while not age.isdecimal() :
            print("나이는 숫자로 입력해 주세요.\n")
            age = input("나이: ")
        major = input("전공:")                          # 입력화면 제공  끝
        student = {'name':name,'age':int(age), 'major':major}
        message = register(student)                     # 등록 기능은 모듈화, 함수별 메시지 리턴
        message_display(message)                        # 메시지 출력 기능 모듈화
    elif menu == '2':
        #for s in students:
            #print("이름:{0}, 나이:{1}, 전공:{2}\n".format(s['name'],s['age'],s['major']))
        print("===== 수강색 목록 보기 =====")
        message = getAllStudents()
        message_display(message)
    elif menu == '3':
        alterId = int(input("id를 입력하세요: "))
        #print("{}\n".format(alterId))
        message = update(alterId)
        message_display(message)
                   
    elif menu == '4':
        alterId = input("id를 입력하세요: ")
        message_display(remove(alterId))
    elif menu == '5':
        students.clear()
        print("모든 수강자 정보가 삭제되었습니다.\n")
    elif menu == '0':
        break
    else:
        print("다시 입력하세요.\n")
