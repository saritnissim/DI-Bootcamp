# 1-  Favorite Numbers
print("Exercise 1:")
#     Create a set called my_fav_numbers with all your favorites numbers.
my_fav_numbers = {2, 4, 6, 8}

#     Add two new numbers to the set.
my_fav_numbers.add(10)
my_fav_numbers.add(12)

#     Remove the last number.
my_fav_numbers_list = list(my_fav_numbers)
my_fav_numbers_list.pop()
my_fav_numbers = set(my_fav_numbers_list)

print(my_fav_numbers)

#     Create a set called friend_fav_numbers with your friend’s favorites numbers.
friend_fav_numbers = {3,5,7,9}

#     Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

# 2 - Tuple
print("Exercise 2:")
#     Given a tuple which value is integers, is it possible to add more integers to the tuple? 
print("No, tuples are immutable")

# 3 - List
print("Exercise 3:")
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
#     Remove “Banana” from the list.
basket.remove("Banana")
print(basket)
#     Remove “Blueberries” from the list.
basket.remove("Blueberries")
print(basket)
#     Add “Kiwi” to the end of the list.
basket.append("Kiwi")
print(basket)
#     Add “Apples” to the beginning of the list.
basket.insert(0,"Apples")
print(basket)
#     Count how many apples are in the basket.
basket_count = basket.count("Apples")
print(basket_count)
#     Empty the basket.
basket.clear()
#     Print(basket)
print(basket)

# 4 - Floats
print("Exercise 4:")
#     Recap – What is a float? What is the difference between an integer and a float? 
print("Integers are whole numbers, floats can contain decimals")
#     Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
float_list_1=[]
for x in range(3,11, 1):
    float_list_1.append(x/2)
print(float_list_1)
float_list_2 = float_range = [1.5 + i * 0.5 for i in range(9)] 
print(float_list_2)

#     Can you think of another way to generate a sequence of floats?

# 5 - For Loop
print("Exercise 5:")
my_range = range(1,21)
#     Use a for loop to print all numbers from 1 to 20, inclusive.
for x in my_range:
    print(x)
#     Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
for index, value in enumerate(my_range):
    if index%2 == 0:
        print(value)

# 6 - While Loop
print("Exercise 6:")
#     Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
my_name = 'Sarit'
usr_name = ""
while usr_name != my_name:
    usr_name = input("What is your name?")

# 7 - Favorite fruits
print("Exercise 7:")
#     Ask the user to input their favorite fruit(s) (one or several fruits).
fav_fruits = input("Enter fruits: (use space separated for multiple)")
#     Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
#     Store the favorite fruit(s) in a list (convert the string of words into a list of words).
fav_fruits_list = fav_fruits.split()
#     Now that we have a list of fruits, ask the user to input a name of any fruit.
usr_fruit = input("Enter a fruit")
#         If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
if usr_fruit in fav_fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
#         If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.
else:
    print("You chose a new fruit. I hope you enjoy")

# 8 -  Who ordered a pizza ?
print("Exercise 8:")
#     Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
toppings = []
while True:
    topping = input("Enter topping. Type 'quit' to finish")
    if topping == 'quit':
        break
#     As they enter each topping, print a message saying you’ll add that topping to their pizza.
    print(f"I will add {topping} to your pizza.")
    toppings.append(topping)
#     Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).
total_price = 10 + 2.5*len(toppings)
print(f"Your total is: {total_price}")

# 9 -  Cinemax
print("Exercise 9:")
#     A movie theater charges different ticket prices depending on a person’s age.
#         if a person is under the age of 3, the ticket is free.
#         if they are between 3 and 12, the ticket is $10.
#         if they are over the age of 12, the ticket is $15.

#     Ask a family the age of each person who wants a ticket.
#     Store the total cost of all the family’s tickets and print it out.
ages = input("What is the age of each person in the family. Use comma-separated list. ")
age_list = ages.split(",")
total_cost = 0 
for age_str in age_list:
    age = int(age_str)
    if age < 3:
        total_cost += 0
    elif 3 <= age <= 12:
        total_cost += 10
    elif age > 12:
        total_cost += 15
print(f"Your total cost is: ${total_cost}")

#     A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
#     Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
name_list = ["Anne", "Bob", "Carrie", "Dave"]
final_list = []
for teen in name_list:
    age = int(input(f"How old are you {teen}?"))
    if 16 <= age <= 21:
        print("You are permitted")
        final_list.append(teen)
    else:
        print("You are not allowed.")
#     At the end, print the final list.
print(f"{final_list} are permitted")

# 10 - Sandwich Orders
print("Exercise 10:")

# Using the list below :
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

#     The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
#     We need to prepare the orders of the clients:
#         Create an empty list called finished_sandwiches.
finished_sandwiches = []

#         One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
while sandwich_orders:
    current_sandwich = sandwich_orders.pop()
    finished_sandwiches.append(current_sandwich)
#     After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
for sandwich in finished_sandwiches:
    print(f"I made your {sandwich}")








