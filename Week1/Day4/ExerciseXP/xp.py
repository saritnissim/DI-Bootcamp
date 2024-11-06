# 1 - What are you learning ?
print("Exercise 1:")
#     Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
def display_message():
    print("I am taking this course so I can practice my coding skills as well as gain new skills and hopefully to find a job.")
#     Call the function, and make sure the message displays correctly.
display_message()

# 2 - What’s your favorite book ?
print("Exercise 2:")
#     Write a function called favorite_book() that accepts one parameter called title.
#     The function should print a message, such as "One of my favorite books is <title>".
#     For example: “One of my favorite books is Alice in Wonderland”
#     Call the function, make sure to include a book title as an argument when calling the function.
def favorite_book(title):
    print(f"One of my favorite books is {title}")
favorite_book("The Notebook")

# 3 - Some Geography
print("Exercise 3:")
#     Write a function called describe_city() that accepts the name of a city and its country as parameters.
def describe_city(city, country="USA"):
#     The function should print a simple sentence, such as "<city> is in <country>".
    print(f"{city} is in country {country}")
#     For example “Reykjavik is in Iceland”
#     Give the country parameter a default value.
#     Call your function.
describe_city("New York")
describe_city("Paris", "France")


# 4 - Random
print("Exercise 4:")
#     Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
def random_numer(num):
    import random
    if 1 <= num <= 100:
     #     Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.
        random_int = random.randint(1,100)
        if num == random_int:
            print("Yay, the numbers are equal!")
        else:
            print(f"We failed. The numbers don't match: {num} and {random_} ")
    else:
        print("The number must be between 1 and 100. Try again.")



# 5 - Let’s create some personalized shirts !
print("Exercise 5:")
#     Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
#     The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
#     Call the function make_shirt().
#     Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
#     Call the function, in order to make a large shirt with the default message
#     Make medium shirt with the default message
#     Make a shirt of any size with a different message.
def make_shirt(size='L', text='I love Python'):
    print(f"The size of the shirt is {size} and the text is {text}")

make_shirt()
make_shirt('M')
make_shirt('S', 'Congratulations Trump!')
#     Bonus: Call the function make_shirt() using keyword arguments.
make_shirt(size ='XL', text='This is a T-shirt')

# 6 -  Magicians …
print("Exercise 6:")
# Using this list of magician’s names
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
#     Create a function called show_magicians(), which prints the name of each magician in the list.
def show_magicians():
    for magician in magician_names:
        print(f"{magician}")
#     Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
def make_great():
    global magician_names
    magician_names = [magician + ' the Great' for magician in magician_names]
#     Call the function make_great().
make_great()
#     Call the function show_magicians() to see that the list has actually been modified.
show_magicians()

# 7 - Temperature Advice
print("Exercise 7:")
#     Create a function called get_random_temp().
def get_random_temp(season):
    import random
#         This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
    # return random.randint(-10, 40)
    if season == 'winter':
        return random.randint(-10, 15)
    if season == 'fall':
        return random.randint(16, 23)
    if season == 'spring':
        return random.randint(24, 31)
    if season == 'summer':
        return random.randint(32, 40)
    

#         Test your function to make sure it generates expected results.
# print(get_random_temp())

#     Create a function called main().
def main():
#         Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
    season = input("Enter a season: summer, fall, winter, or spring")
    temperature = get_random_temp(season)
#         Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”
    print(f"The temperature right now is {temperature} degrees Celsius.")

#     Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
#         below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
    if temperature < 0 :
        print("Brrr, that’s freezing! Wear some extra layers today")
#         between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
    elif 0 <= temperature < 16:
        print("Quite chilly! Don’t forget your coat")
#         between 16 and 23
    elif 16 <= temperature <=23:
        print("It will be pleasant today")
#         between 24 and 32
    elif 24 <= temperature < 32:
        print("It's warm today. Dress accordingly")
#         between 32 and 40
    elif 32 <= temperature < 40:
        print("It's hot!")

#     Change the get_random_temp() function:
#         Add a parameter to the function, named ‘season’.
#         Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
#         Now that we’ve changed get_random_temp(), let’s change the main() function:
#             Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.

#             Use the season as an argument when calling get_random_temp().
main()

#     Bonus: Give the temperature as a floating-point number instead of an integer.
#     Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.


# 8 - Star Wars Quiz
print("Exercise 8:")
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


#     Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
wrong_answers = []
#     Create a function that informs the user of his number of correct/incorrect answers.
def ask_questions():
    for question_data in data:
        usr_answer = input(question_data['question'])
        if usr_answer != question_data['answer']:
            wrong_answers.append({
                'question': question_data['question'],
                'answer': question_data['answer'],
                'your answer': usr_answer
            })
#     Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
    print(wrong_answers)
#     If he had more then 3 wrong answers, ask him to play again.
    if len(wrong_answers) > 3:
        play_again = input("Play Again? y/n")
        if play_again == 'y':
            ask_questions()
        else:
            return
        
ask_questions()