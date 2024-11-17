# PART 1

# What is a class? = A class is the 'template' for the object. It contains attributes/characteristics and methods

#What is an instance? = When you create an instace of a class, you are creating an actual object that can use the methods and hold the data defined in the class.

# What is encapsulation? = You bundle data and methods into one unit

# What is abstraction? = Hiding the complex stuff. For example, you put all logic in a method, and just call that method when you need the logic

# What is inheritance? = Creating new classes that based on existing ones and allowing to extend their functionality

# What is multiple inheritance? = Inheriting from more than one class

# What is polymorphism? = Different classes implement method their own way.  For example a Dog will run() differently than a Human

# What is method resolution order or MRO? = When an object inherits, this determines which functions are given preference.

# Part 2

#  Create a deck of cards class. The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

#     The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
import random


class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} {self.suit}"
        
#     The Deck class :
class Deck:
    def __init__(self):
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        
        # Create deck of 52 cards
        self.cards = [Card(suit, value) for suit in suits for value in values]

    def shuffle(self):
        return random.shuffle(self.cards)

    def deal(self):
        your_card = self.cards.pop()
        print(f"Remaining {len(self.cards)}: {self.cards}")
        print(f"Your card: {your_card}")
        return your_card

Deck().deal()
#         should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
#         should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

# Daily Challenge: Modules
# Instructions :

# Using the requests and time modules, create a function which returns the amount of time it takes a webpage to load (how long it takes for a complete response to a request).
# Test your code with multiple sites such as google, ynet, imdb, etc.
import requests
import time

def get_load_time(url):
    start_time = time.time()  # Record the start time
    requests.get(url)  # Send a GET request to the URL
    end_time = time.time()  # Record the end time
    load_time = end_time - start_time  # Calculate the time difference
    return f"{load_time} seconds"

print(get_load_time("https://www.google.com"))