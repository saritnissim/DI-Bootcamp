print("Exercise 1:")

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

#     Instantiate three Cat objects using the code provided above.
#     Outside of the class, create a function that finds the oldest cat and returns the cat.
#     Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.
cat1 = Cat("Albert", 2)
cat2 = Cat("Bobby", 4)
cat3 = Cat("Cassie", 6)

def oldest_cat(*cats):
    oldest_cat = cats[0]
    for cat in cats[1:]:
        if cat.age > oldest_cat.age:
            oldest_cat = cat
    print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")
    return oldest_cat

oldest_cat(cat1, cat2, cat3)

# 2 - Dogs
print("Execrise 2:")
#     Create a class called Dog.
class Dog:
#     In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
    def __init__(self, name, height):
       self.name = name
       self.height = height

#     Create a method called bark that prints the following string “<dog_name> goes woof!”.
    def bark(self):
        print(f"{self.name} goes woof!")

#     Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
    def jump(self):
        print(f"{self.name} jumps {self.height} cm high!”")

#     Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
davids_dog = Dog("Rex", 50)
#     Print the details of his dog (ie. name and height) and call the methods bark and jump.
print(davids_dog.__dict__)
davids_dog.bark()
davids_dog.jump()
#     Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
sarahs_dog = Dog("Teacup", 20)
#     Print the details of her dog (ie. name and height) and call the methods bark and jump.
print(sarahs_dog.__dict__)
sarahs_dog.bark()
sarahs_dog.jump()
#     Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.
if davids_dog.height > sarahs_dog.height:
    print(f"The bigger dog is {davids_dog.name}.")
elif davids_dog.height < sarahs_dog.height:
    print(f"The bigger dog is {sarahs_dog.name}.")
else:
    print("Both dogs are the same height.")

# 3 - Who’s the song producer?
print("Exercise 3:")
#     Define a class called Song, it will show the lyrics of a song.
class Song:
#     Its __init__() method should have two arguments: self and lyrics (a list).
    def __init__(self, lyrics):
        self.lyrics = lyrics
#     Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

#     Create an object, for example:
stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

#     Then, call the sing_me_a_song method.
stairway.sing_me_a_song()
#The output should be:
#     There’s a lady who's sure
#     all that glitters is gold
#     and she’s buying a stairway to heaven


# 4 - Afternoon at the Zoo
print("Exercise 4:")
#     Create a class called Zoo.
class Zoo:
#     In this class create a method __init__ that takes one parameter: zoo_name.
    def __init__(self, zoo_name):
#     It instantiates two attributes: animals (an empty list) and name (name of the zoo).
        self.animals = []
        self.name = zoo_name

#     Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to the zoo!")
        else:
            print(f"{new_animal} is already in the zoo!")

#     Create a method called get_animals that prints all the animals of the zoo.
    def get_animals(self):
        print(self.animals)

#     Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
    def sell_animal(self, animal_sold):
        self.animals.remove(animal_sold)

#     Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        animal_groups = {}
        
        #Initialize
        counter = 1
        current_letter = sorted_animals[0][0]
        animal_groups[counter] = sorted_animals[0]
        
        for animal in sorted_animals[1:]:
            if animal[0] == current_letter:
                animal_groups[counter].append(animal)
            else:
                counter += 1
                current_letter = animal[0]
                animal_groups[counter] = [animal]

        return animal_groups
#     { 
#         1: "Ape",
#         2: ["Baboon", "Bear"],
#         3: ['Cat', 'Cougar'],
#         4: ['Eel', 'Emu']
#     }

#     Create a method called get_groups that prints the animal/animals inside each group.
    def get_groups(self):
        animal_groups = self.sort_animals()
        print(animal_groups)

#     Create an object called ramat_gan_safari and call all the methods.

ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Elephant")
ramat_gan_safari.add_animal("Emu")

ramat_gan_safari.get_groups()



