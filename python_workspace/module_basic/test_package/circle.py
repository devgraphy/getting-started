# 
# 반지름을 입력받아서 원주 구하기

PI = 3.141592

def number_input():
    output = input("숫자 입력: ")
    return float(output)

def get_circumference(rad):
    return 2*PI*rad

def get_circle_are(rad):
    return PI*rad*rad

print("#모듈의 __name__ 출력하기#")
print(__name__) # 파일명 -> 엔트리 포인트 X
print()