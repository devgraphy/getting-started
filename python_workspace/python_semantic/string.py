hello = "hello python" #string array: 0~len() -1
print(hello[1:3])       #index 1 ~ (3-1)
print(len(hello))       #length
print("'hello python' length is {0}".format(len(hello))) #string format
print(hello.upper())
print(hello.lower())

print("{0} is alphabet?".format(hello.isalnum()))

print("'1'문자열 검색 ", hello.find("1")) #검색한 문자열 first index return
print("'1'문자열 검색 ", hello.rfind("1")) #검색한 문자열 