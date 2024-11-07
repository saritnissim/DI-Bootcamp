# Exercise 1
usr_num = int(input("Input number"))
usr_len = int(input("Input length"))

result = [usr_num]
for x in range(1,usr_len) :
    result.append(result[x-1]+usr_num)
print(result)

# Another way:
result_second = []
for i in range(1,usr_len + 1):
    result_second.append(usr_num*i)
print(result_second)

# Exercise 2
usr_str = input("Input string")
result = usr_str[0]
pointer = 0
for char in usr_str:
    #If the result string does not have the letter, add it
    if result[pointer] != char:
        result += char
        pointer += 1
print(result)

# Another way:
result_2 = usr_str[0]
for char in usr_str:
    if result_2[-1] != char:
        result += char
print(result_2)