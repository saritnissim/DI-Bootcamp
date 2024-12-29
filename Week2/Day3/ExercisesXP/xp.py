print("Execrise 1")
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    #Your code starts HERE
    def __str__(self):
        return f"{self.amount} {self.currency}"
    
    def __int__(self):
        return self.amount
    
    def __repr__(self):
        return f"{self.amount} {self.currency}"
    
    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                    raise ValueError("Cannot add two different currencies")
            return Currency(self.currency, self.amount + other.amount)
        elif isinstance(other, int):
            return Currency(self.currency, self.amount + other)
        else:
            raise TypeError("Unsupported type for addition")

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

# print(str(c1))
# # '5 dollars'
# print(int(c1))
# # 5
# print(repr(c1))
# # '5 dollars'

# sum = c1 + 5
# print(sum)
# # 10

# print(c1 + c2)
# # 15

# print(c1)
# # 5 dollars

# c1 += 5
# print(c1)
# # 10 dollars

# c1 += c2
# print(c1)
# # 20 dollars

# print(c1 + c3)

print("Exercise 2: see exercise_one.py")

print("Exercise 3:")
import random
import string
random_string = ''.join(random.choices(string.ascii_letters, k=5))
print(random_string)

print("Exercise 4:")
def current_date():
    import datetime
    return datetime.datetime.now()

print(current_date())

print("Exercise 5:")
def time_to_new_year():
    import datetime
    new_year = datetime.datetime(datetime.datetime.now().year + 1, 1, 1)
    return new_year - datetime.datetime.now()

print("Exercise 6:")
def minutes_lived(birthdate):
    import datetime
    birthdate = datetime.datetime.strptime(birthdate, '%d-%m-%Y')
    time_lived = datetime.datetime.now() - birthdate
    return time_lived.total_seconds() / 60

print(minutes_lived('23-04-1990'))

print("Exercise 7:")
import faker
users = []
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.
def add_user():
    fake = faker.Faker()
    user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code()
    }
    users.append(user)
add_user()
add_user()
print(users)