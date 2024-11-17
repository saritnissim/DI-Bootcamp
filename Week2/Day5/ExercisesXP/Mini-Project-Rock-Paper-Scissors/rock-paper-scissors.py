# Part II - rock-paper-scissors.py
from game import Game
#     rock-paper-scissors.py : create 3 functions
def get_user_menu_choice():

    # Display the menu
    print("Menu:")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")

    # Get the user's choice (as a string)
    user_choice = input("Please choose an option (1/2/3): ").strip()

    # Validate the choice
    if user_choice == "1":
        return 'play'
    elif user_choice == "2":
        return "scores"
    elif user_choice == "3":
        return "quit"
    else:
        print("Invalid choice. Please choose 1, 2, or 3.")
        return None
# this should display a simple menu, get the user’s choice (with data validation), and return the choice. No looping should occur here.
#         The possibles choices are : Play a new game or Show scores or Quit

def print_results(results):
    # – this should print the results of the games played. It should have a single parameter named results; which will be a dictionary of the results of the games played. It should display these results in a user-friendly way, and thank the user for playing.
    print("\nGame Results Summary:")
    print(f"Wins: {results.get('win')}")
    print(f"Losses: {results.get('loss')}")
    print(f"Draws: {results.get('draw')}")
    print("\nThank you for playing!")


#         Note: results should be in this form: {win: 2,loss: 4,draw: 3}. Bear in mind that this dictionary will need to be created and populated in some other part of our code, and passed in to the print_results function at the right time.

def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}  # Dictionary to store the overall results

    #  - the main function. It should take care of 3 things:
#             Displaying the menu repeatedly, until the user types in the value to exit the program: ‘x’ or ‘q’, whatever you decide. (Make use of the get_user_menu_choice function)
    while True:
        user_choice = get_user_menu_choice()

        if user_choice == "play":
            # Create a new Game object and play
            game = Game()
            result = game.play()
            
            results[result] += 1

        if user_choice == 'scores':
            print_results(results)

        if user_choice == 'quit':
            print("Goodbye!")
            break  # Exit the loop and end the program

        else:
            continue

        
        
#             When the user chooses to play a game:
#                 Create a new Game object (see below), and call its play() function, receiving the result of the game that is returned.
#                 Remember the results of every game that is played.

#             When the user chooses to exit the program, call the print_results function in order to display a summary of all the games played.
# # 
main()