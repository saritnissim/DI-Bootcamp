# 1 – Random Sentence Generator
print("\nExercise 1:")
# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# Hint : The generated sentences do not have to make sense.

#     Download this word list

#     Save it in your development directory.
import itertools
import string
from collections import defaultdict
import random
#     Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?
def get_words_from_file(file_path):
    word_dict = {letter: [] for letter in string.ascii_uppercase}
    with open(file_path, 'r') as file:
        line = file.readline()  # Read the first line and remove trailing newlines
        while line:
            word = line.strip()
            first_letter = word[0]
            word_dict[first_letter].append(word)
            line = file.readline()
    return word_dict
#     Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
def get_random_sentence(length):
    word_dict = get_words_from_file('sowpods.txt')
    flattened_list = list(itertools.chain(*word_dict.values()))
    sentence = random.sample(flattened_list, length)
    return ' '.join(sentence)

#         use the words list to get your random words.
#         the amount of words should be the value of the length parameter.

#     Take the random words and create a sentence (using a python method), the sentence should be lower case.

#     Create a function called main which will:
def main():
     # Print a message explaining what the program does
    print("This program asks you to enter how many words you want in your sentence and will generate a random sentence .")
    try:
        sentence_length = int(input("How many words do you want your sentence to have?"))
        if 2 <= sentence_length <= 20:
            print(get_random_sentence(sentence_length).lower())
        else:
            print("Invalid input! Please enter an integer between 2 and 20.")
        return
    except ValueError:
        print("Invalid input! Please enter a valid integer.")

main()
 
    
    #             If the user inputs incorrect data, print an error message and end the program.
#             If the user inputs correct data, run your code.


# 2 - Working with JSON
print("\nExercise 2:")
import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

#     Access the nested “salary” key from the JSON-string above.
data = json.loads(sampleJson)
salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)

#     Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
data["company"]["employee"]["birth_date"] = '23-04-1990'

#     Save the dictionary as JSON to a file.
with open("data.json", "w") as json_file:
    json.dump(data, json_file, indent=4)  # Write the JSON data with indentation for readability