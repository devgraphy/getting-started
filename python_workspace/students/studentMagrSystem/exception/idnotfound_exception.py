class IDNotFoundException(Exception): # 카멜 케이스 준수!
    def __init__(self, message):
        super().__init__(message+" : 존재하지 않는 ID")
        