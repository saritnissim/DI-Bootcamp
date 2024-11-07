# Challenge 1 : Sorting
#     Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
#     Use List Comprehension
def sort_words(*args):
    print(', '.join(sorted( args)))
# Example:
# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world
sort_words('apple', 'orange', 'lemon')


# Challenge 2 : Longest Word
#     Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
def longest_word(sentence):
    longest_word = ''
    words = sentence.split(" ")
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word
    print(longest_word)
#     Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).

# Examples

longest_word("Margaret's toy is a pretty doll.") #➞ "Margaret's"

longest_word("A thing of beauty is a joy forever.") #➞ "forever."

longest_word("Forgetfulness is by all means powerless!") #➞ "Forgetfulness"
