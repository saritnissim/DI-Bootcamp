# 1 -  Pets
print("Exercise 1:")
# Using this code:

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


#     Create another cat breed named Siamese which inherits from the Cat class.
class Siamese(Cat):
    pass
#     Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
bengal = Bengal("Alpha", 8)
chartreux = Chartreux("Beta", 5)
siamese = Siamese("Delta", 7)

all_cats = [bengal, chartreux, siamese]    
#     Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
sara_pets = Pets(all_cats)
#     Take all the cats for a walk, use the walk method.
sara_pets.walk()


# 2 - Dogs
print("\nExercise 2:")
#     Create a class called Dog with the following attributes name, age, weight.
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self. weight = weight
#     Implement the following methods in the Dog class:
#         bark: returns a string which states: “<dog_name> is barking”.
    def bark(self):
        return f"{self.name} is barking!"
        
#         run_speed: returns the dogs running speed (weight/age*10).
    def run_speed(self):
        return self.weight/self.age*10
#         fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.
    def fight(self, other_dog):
        self_strength = self.run_speed() * self.weight
        guest_strength = other_dog.run_speed() * other_dog.weight
        if self_strength > guest_strength:
            return f"{self.name} is the winner"
        elif guest_strength > self_strength:
            return f"{other_dog.name} is the winner"
        else:
            return "It's a tie"

#     Create 3 dogs and run them through your class.
dog_a = Dog("Dog A", 20, 2)
dog_b = Dog("Dog B", 40, 4)
dog_c = Dog("Dog C", 60, 6)
print(dog_a.bark())
print(dog_b.fight(dog_c))


# 3 - Dogs Domesticated
print("\nExercise 3:")
print("\nSee file xp2.py")
#     Create a new python file and import your Dog class from the previous exercise.
#     In the new python file, create a class named PetDog that inherits from Dog.
#     Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
#     Add the following methods:
#         train: prints the output of bark and switches the trained boolean to True

#         play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

#         do_a_trick: If the dog is trained the method should print one of the following sentences at random:
#             “dog_name does a barrel roll”.
#             “dog_name stands on his back legs”.
#             “dog_name shakes your hand”.
#             “dog_name plays dead”.


# 4 - Family
print("\nExercise 4:")
#     Create a class called Family and implement the following attributes:
#         members: list of dictionaries
#         last_name : (string)
class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name
        

#     Implement the following methods:
#         born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
    def born(self,**child):
        self.members.append(child)
        print(f"Congratulations on {child['name']}")

#         is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
    def is_18(self, name):
        for member in family_members:
            if member['name'] == name:
                return member['age'] > 18
        return False

#         family_presentation: a method that prints the family’s last name and all the members’ details.
    def family_presentation(self):
        print(f"Welcome to the {self.last_name} family!")
        for member in self.members:
            is_child_status = "a child" if member['is_child'] else "an adult"
            print(f"{member['name']} is {member['age']} years old, {member['gender']}, and is {is_child_status}.")


#     Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.
family_members = [
            {'name':'Michael','age':35,'gender':'Male','is_child':False},
            {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]
nissim_family = Family(family_members, "Nissim")
# Call the family_presentation method
nissim_family.family_presentation()

# Add a new child to the family
nissim_family.born(name="Emily", age=1, gender="Female", is_child=True)

# Call the family_presentation again to show the updated family
nissim_family.family_presentation()

# Check if a family member is over 18
print(f"Is Michael over 18? {nissim_family.is_18('Michael')}")
print(f"Is Emily over 18? {nissim_family.is_18('Emily')}")


# 5 - TheIncredibles Family
print("\n Exercise 5:")
#     Create a class called TheIncredibles. This class should inherit from the Family class:
#     This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)
class TheIncredibles(Family):

#     Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.
    def use_power(self, name):
        if self.is_18(name): 
            print(f"{name} uses their power!")
        else:
            raise Exception(f"{name} is not over 18 and cannot use their power.")

#     Add a method called incredible_presentation which :
    def incredible_presentation(self):
#         Print a sentence like “*Here is our powerful family **”
        print("** Here is our power family **")
#         Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)
        super().family_presentation()


#     Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.
incredible_members = [
            {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
            {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
        ]       
incredibles = TheIncredibles(incredible_members, "Incredibles")



#     Call the incredible_presentation method.
incredibles.incredible_presentation()

#     Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
incredibles.born(name="Baby Jack", age=1, gender="Male", is_child=True, power="Unknown Power", incredible_name="BabyJack")

#     Call the incredible_presentation method again.
incredibles.incredible_presentation()

# Test the use_power method with different family members
try:
    incredibles.use_power("Michael")  # Should work, as Michael is over 18
    incredibles.use_power("Baby Jack")  # Should raise an exception, as Baby Jack is a child
except Exception as e:
    print(e)