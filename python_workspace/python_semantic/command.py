
month = input("월 입력 : ") #문자열로 입력받음
if month.isdecimal(): #숫자로 구성?
    m = int(month)  #타입 캐스팅
    if m  == 1 or m == 3 or m == 5 or m == 7 or m == 8 or m == 10 or m == 12:
        print("{0}월은 31일 까지 있습니다.".format(m))
    elif m == 2:
        print("{0}월은 28일 까지 있습니다.".format(m))
    else:
        print("{0}월은 30일 까지 있습니다.".format(m))
else:
     month = input("월은 1~12 사이 값을 입력 : ")


#list type: [str, int, float, boolean, list ...] ,[[1,2,3],[1,2]]
# +, *(iter), len()
# append(), insert(), del, pop(), remove(), clear()
list_a = [1,2,3]
list_b = [4,5,6]
print(list_a + list_b, "연산 후 list_a 변화: ", list_a) # 변화 x
print(list_a.append(4), "append 이후 list_a: ", list_a) # 마지막 index+1에 추가
del list_a[0]
print("del list_a[0] 이후 list_a: ", list_a) # 해당 index 삭제
list_a.pop(0)
print("list_a.pop(0) 이후 ", list_a) # 해당 index 삭제
print(list_a.remove(4), ":remove(4) 4인값 삭제 후 list_a: ", list_a) #첫번째 만나는 값 삭제


# for 반복문
index = 0
list_a = [1,2] + list_a
for data in list_a:
    print("list_a[{0}] : {1}".format(index, data))
    data +=1



