class ClassTest:
    class_var = 0
    def __init__(self, instance_var):
        self.instance_var = instance_var

# 인스턴스 변수 조작(인스턴스 이름으로 접근)
c1 = ClassTest(10)
c2 = ClassTest(20)
print("c1 instance var:{}, c2 instance var:{}".format(c1.instance_var, c2.instance_var))

# 클래스 변수 조작(클래스 이름으로 접근)
ClassTest.class_var += 1 
print("c1 class var:{}, c2 class var:{}".format(c1.class_var, c2.class_var))
