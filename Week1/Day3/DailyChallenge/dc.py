# Challenge 1
print("Daily Challenge 1:")
#     Ask a user for a word
word = input("Enter a word: ")
#     Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
word_dict = {}
#         Make sure the letters are the keys.
#         Make sure the letters are strings.
#         Make sure the indexes are stored in a list and those lists are values.
for index, letter in enumerate(word):
    if letter in  word_dict:
        word_dict[letter].append(index)
    else:
        word_dict[letter] = [index]
print(word_dict)

# Challenge 2
print("Daily Challenge 2:")
#     Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
#     Sort the list in alphabetical order.
#     Return “Nothing” if you can’t afford anything from the store.

# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = 300
cart = []

for item, price in items_purchase.items():
    price_int= int(price.strip("$").replace(",",""))
    if price_int <= wallet:
        # We can add to the cart
        cart.append(item)
        # Update the wallet
        wallet = wallet - price_int
print(cart)
