# 구조적 프로그래밍 버전
#수강생 관리 시스템
id = 0
students=[]


while True:
    print("===== Cloud MSA 반 수강생 관리 시스템 =====")
    print("1. 수강생 정보 등록\n2. 수강생 목록 보기\n3.수강생 정보 수정\n4.수강생 정보 삭제\n5.모두 삭제\n0.종료")
    menu = input("메뉴를 선택하세요")
    if menu == '1':
        id = id+1
        name = input("이름:")
        age = input("나이:")                
        while not age.isdecimal() :
            print("나이는 숫자로 입력해 주세요.\n")
            age = input("나이: ")
        major = input("전공:")
        student = {'id': id, 'name':name, 'age':int(age), 'major':major}
        students.append(student)
        print("{0}(이)가 등록되었습니다.".format(name))
    elif menu == '2':
        #for s in students:
            #print("이름:{0}, 나이:{1}, 전공:{2}\n".format(s['name'],s['age'],s['major']))
        print("===== 수강색 목록 보기 =====")
        print(students)
    elif menu == '3':
        alterId = input("id를 입력하세요: ")
        for s in students:
            if s['id'] == int(alterId):
                alterName = input("변경할 이름을 입력하세요: ")
                s['name'] = alterName
                print("{0} 학생 번호의 이름이 {1} 으로 변경되었습니다.".format(s['id'],s['name']))
                break
        
    elif menu == '4':
        alterId = input("id를 입력하세요: ")
        for s in students:
            if s['id'] == int(alterId):
                students.remove(s)
                break
    elif menu == '5':
        students.clear() # 왜 안먹히지??
    elif menu == '0':
        break
    else:
        print("다시 입력하세요.\n")
