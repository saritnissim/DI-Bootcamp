# Using the input function, ask the user for a string. The string must be 10 characters long.
usr_str = input("Input a string 10 characters long")

#     If it’s less than 10 characters, print a message which states “string not long enough”.
if (len(usr_str) < 10):
    print("string not long enough")
#     If it’s more than 10 characters, print a message which states “string too long”.
elif (len(usr_str) > 10):
    print("string too long")
#     If it’s 10 characters, print a message which states “perfect string” and continue the exercise.
else: 
    print("perfect string")

# Then, print the first and last characters of the given text.
# The user enters "HelloWorld"
# Then you have to print 
# H
# d
print(usr_str[0])
print(usr_str[-1])

# 3. Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:

# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld
result=""
for char in usr_str:
    result += char
    print(result)


# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:
import random
usr_str_list = list(usr_str)
random.shuffle(usr_str_list)
print("".join(usr_str_list))