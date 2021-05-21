




# 사용자 정의 예외 - 클래스

# case1
class UserException(Exception):
    def __init__(self):
        Exception.__init__(self)

    def __str__(self):
        return "사용자 정의 오류 발생"

# case2
class UserException(Exception):
    def __init__(self, message):
        super().__init__(message)
# 이 두가지 차이가 뭐지????


def useException():
    raise UserException("사용자 정의 오류 발생")
