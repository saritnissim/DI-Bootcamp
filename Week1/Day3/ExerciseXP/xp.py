# 1 - Convert lists into dictionaries
print("Exercise 1:")
#     Convert the two following lists, into dictionaries.
#     Hint: Use the zip method

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

tuples = zip(keys, values)
print(dict(tuples))

# 2 - Cinemax #2
print("Exercise 2:")
#     A movie theater charges different ticket prices depending on a person’s age.
#         if a person is under the age of 3, the ticket is free.
#         if they are between 3 and 12, the ticket is $10.
#         if they are over the age of 12, the ticket is $15.

#     Given the following object:

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

#     How much does each family member have to pay ?
#     Print out the family’s total cost for the movies.
total_cost = 0
for name, age in family.items():
    if age < 3:
        print(f"{name}'s ticket is free")
        total_cost += 0
    elif 3 <= age <= 12:
        print(f"{name}'s ticket is $10")
        total_cost += 10
    else:
        print(f"{name}'s ticket is $15")
        total_cost +=15

print("Total Cost: $", total_cost)
#     Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).
family_data = {}
while True:
    name = input("Please enter your name (or type 'quit' to stop): ")
    if name == 'quit':
      break
    age = int(input("Please enter {name}'s age: "))
    family_data[name] = age
print(family_data)


# 3 - Zara
print("Exercise 3:")
#     Here is some information about a brand.
#     Create a dictionary called brand which value is the information from part one (turn the info into keys and values). The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
brand = {
        'name': 'Zara',
        'creation_date': 1975 ,
        'creator_name': 'Amancio Ortega Gaona' ,
        'type_of_clothes': ['men', 'women', 'children', 'home'], 
        'international_competitors': ['Gap', 'H&M', 'Benetton'],
        'number_stores': 7000,
        'major_color':
            {
                'France': 'blue', 
                'Spain': 'red', 
                'US': ['pink', 'green']
            }
    }



#     Change the number of stores to 2.
brand['number_stores'] = 2
#     Print a sentence that explains who Zaras clients are.
client_types = ', '.join(brand['type_of_clothes'])
print(f"Zara's clients are people who buy clothes for {client_types}.")
#     Add a key called country_creation with a value of Spain.
brand['country_creation'] = 'Spain'
#     Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
if brand.get('international_competitors') != None:
    brand['international_competitors'].append('Desigual')
#     Delete the information about the date of creation.
del brand['creation_date']
#     Print the last international competitor.
brand['international_competitors'].pop()
#     Print the major clothes colors in the US.
print(f"Major clothes colors: {brand['major_color']['US']}")
#     Print the amount of key value pairs (ie. length of the dictionary).
print(len(brand))
#     Print the keys of the dictionary.
print(brand.keys())
#     Create another dictionary called more_on_zara with the following details:
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000
}
#       Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
print(f"brand: {brand}")
brand.update(more_on_zara)
#       Print the value of the key number_stores. What just happened ?
print(brand['number_stores']) #number of stores was updated


# Exercise 4 : Disney characters
print("Exercise 4:")

# Use this list :
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# Analyse these results :
# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

#     Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
disney_users_A = {}
for idx, val in enumerate(users):
    disney_users_A[val] = idx
print(disney_users_A)
#     Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
disney_users_B = {}
for idx, val in enumerate(users):
    disney_users_B[idx] = val
print(disney_users_B)
#     Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
disney_users_C = {}
users_reordered = sorted(users)
for idx, user in enumerate(users_reordered):
    disney_users_C[user] = idx
print(disney_users_C)

#     Only recreate the 1st result for:
#         The characters, which names contain the letter “i”.
disney_users_D = {}
for idx, val in enumerate(users):
    if "i" in val:
        disney_users_D[val] = idx
print(disney_users_D)

#         The characters, which names start with the letter “m” or “p”.
disney_users_E = {}
for idx, val in enumerate(users):
    if val.startswith("M") or val.startswith("P"):
        disney_users_E[val] = idx
print(disney_users_E)

