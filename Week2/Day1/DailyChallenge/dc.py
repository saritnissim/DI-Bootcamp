
#     Take a look at the following code and output:

# McDonald's farm

# cow : 5
# sheep : 2
# goat : 12

#     E-I-E-I-0!


# Create the code that is needed to receive the result provided above. Below are a few questions to assist you with your code:

#     Create a class called Farm. How should it be implemented?
class Farm:
#     Does the Farm class need an __init__ method? If so, what parameters should it take?
    def __init__(self, name):
        self.name  = name
        self.farm_animals = {}

#     How many methods does the Farm class need?
#     Do you notice anything interesting about the way we are calling the add_animal method? What parameters should this function have? How many…?
    def add_animal(self, animal, amount=1):
        if animal in self.farm_animals:
            self.farm_animals[animal] += amount
        else:
            self.farm_animals[animal] = amount

#     Test your code and make sure you get the same results as the example above.
#     Bonus: nicely line the text in columns as seen in the example above. Use string formatting.
    
    def get_info(self):
        to_string =""
        to_string += f"{self.name}'s farm\n"
        for animal_name, amount in self.farm_animals.items():
            to_string += f"\n{animal_name}\t:\t{amount}"
        to_string += "\n\n"
        to_string += "    E-I-E-I-0!     "
        return to_string

# Expand The Farm

#     Add a method called get_animal_types to the Farm class. This method should return a sorted list of all the animal types (names) in the farm. With the example above, the list should be: ['cow', 'goat', 'sheep'].
    def get_animal(self):
        sorted_animals  = sorted(self.farm_animals.keys())
        return sorted_animals

#     Add another method to the Farm class called get_short_info. This method should return the following string: “McDonald’s farm has cows, goats and sheeps.”. The method should call the get_animal_types function to get a list of the animals.
    def get_short_info(self):
        plural_list = []
        for animal, count in self.farm_animals.items():
            if count > 0:
                plural_list.append(f"{animal}s")
            else:
                plural_list.append(animal)

        return f"{self.name}'s farm has {', '.join(plural_list[:-1])} and {plural_list[-1]}."


#         Note : In English the plural form of the word “sheep” is sheep. But for the purpose of the exercise, let’s say that if there is more than 1 animal, an “s” should be added at the end of the word.


macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_short_info())