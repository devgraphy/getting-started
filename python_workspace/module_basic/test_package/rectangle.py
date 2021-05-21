# rectangle 구하기 (도형별로 모듈화 中...)

def number_input():
    x = int(input("가로 길이: "))
    y = int(input("세로 길이: "))
    return (x, y) # 튜플 자료구조

def get_circumference(x, y):
    return 2*x + 2*y

def get_rectangle_are(x, y):
    return 

print("#모듈의 __name__ 출력하기#")
print(__name__) # 파일명
print()