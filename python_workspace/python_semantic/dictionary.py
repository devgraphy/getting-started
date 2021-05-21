#dictionary type: varaibale_name = {"name": "value",...} value: int, float, boolean, str, list
#data access : variable_name{}
student1 = {"name":"고재경", "age":26, "major":"컴퓨터공학"}
student2 = {"name":"권혜영", "age":25, "major":"공간정보"}
#print("이름: {0}, 나이: {1} 전공: {2}".format(student1["name"], student1["age"], student1["major"]))
students = [student1, student2]


for s in students: 
    print("이름: {0}, 나이: {1} 전공: {2}".format(s["name"], s["age"], s["major"]))
    

#추가 수정
students[0]["studentid"] = "CloudMSA01"
print(students[0])
students[0]["studentid"] = "CloudMSA02"
print(students[0])

#dict 삭제
del students[0]["studentid"]
print(students[0])
key_value = input("student 속성 입력(name, age, major")

if students[0].get(key_value) == None:
    key_value = input("student 속성 입력(name, age, major")
print("{0} key의 value 값은 {1} ".format(key_value, students[0][key_value]))
