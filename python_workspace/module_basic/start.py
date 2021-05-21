# import test_module.py as test # ModuleNotFoundError
# import test_package.test_module as test # 패키지 사용법
# import test_package.test_module2 as test2
from test_package import * # __init__.py 로 관련 모듈의 패키지 한 번에 import
# circle
rad = circle.number_input()
print(circle.get_circumference(rad))
print(circle.get_circle_area)(rad)

print("#메인의 __name__ 출력#")
print(__name__) # 출력: __main__ -> 엔트리 포인트!
print()

# rectangle
x, y = rectangle.number_input()
print(rectangle.get_circumference(x,y))
print(rectangle.get_rectangle_area(x,y))

# __init__.py :관련 패키지 한번에 가져 오고자 할 때