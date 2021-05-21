hello = input("say hello: ")
print(hello, type(hello))
print("안녕")
data = input("input number: ")
print("input number is {0}, type is {1}".foramt(data), type(data))
original_data = 100
sum = original_data + data #type_error
sum = original_data + int(data)
print(sum)

print("{0}, {1}, {2}".format(hello), type(hello))
