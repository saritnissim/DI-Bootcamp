#     Create a new python file and import your Dog class from the previous exercise.
from xp import Dog
#     In the new python file, create a class named PetDog that inherits from Dog.
class PetDog(Dog):
#     Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
    def __init__(self, name, age, weight,trained=False):
        super().__init__(name, age, weight)
        self.trained = trained
#     Add the following methods:
#         train: prints the output of bark and switches the trained boolean to True
    def train(self):
        print(self.bark())
        self.trained = True

#         play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.
    def play(self, *args):
        print(f"{', '.join(args)}, and {self.name} all play together")

#         do_a_trick: If the dog is trained the method should print one of the following sentences at random:
    def do_a_trick(self):
        import random

        if self.is_trained:
            tricks = [
                f"{self.name} does a barrel roll.",
                f"{self.name} stands on his back legs.",
                f"{self.name} shakes your hand.",
                f"{self.name} plays dead."
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained and can't do a trick.")
