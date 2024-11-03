# 1 - Print Hello World 5 times
print('Hello World\n' * 5)

# 2 - Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8)
result = (99 ** 3) * 8
print(result)

# 3 - Predict the output
print(5 < 3) # False
print(3 == 3) # True
print(3 == '3') # False
# print("3" > 3) # Error
print("Hello" == "hello") # False

# 4 - Create a variable called computer_brand which value is the brand name of your computer. Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".
computer_brand = 'Mac'
print(f'I have a {computer_brand}')

# 5 - Your Information
# a. Create a variable called name, and set it’s value to your name.
# b. Create a variable called age, and set it’s value to your age.
# c. Create a variable called shoe_size, and set it’s value to your shoe size.
# d. Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
# e. Have your code print the info message.
# f. Run your code
name = 'Sarit Nissim'
age = 34
shoe_size = 37
info = f'My name is {name}. I am {age} years old and I wear size {shoe_size} shoes.'
print(info)

# 6 -
# a. Create two variables, a and b.
# b. Each variable value should be a number.
# c. If a is bigger then b, have your code print Hello World.
a = int(input("a:"))
b = int(input("b:"))
if ( a > b): 
    print("Hello World")

# 7 - Write code that asks the user for a number and determines whether this number is odd or even.
my_num = int(input("Enter a number: "))
if (my_num % 2 == 0):
    print("number is even")
else:
    print("number is odd")

# 8 - Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.
user_name = input("What is your name?")
my_name = "Sarit"
if (user_name == my_name):
    print("Ha! We have the same name")

# 9 - Write code that will ask the user for their height in centimeters.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.
height = int(input("What is your height (in centimeters)?"))
if (height > 145):
    print("You are tall enough to ride")
else:
    print("You need to grow more")
