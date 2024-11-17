from anagram_checker import AnagramChecker

class Anagram_GUI:
    
    def main(self):
        while True:
            # Show the menu options to the user
            print("\nMenu:")
            print("1. Input a word to find anagrams.")
            print("2. Exit.")
        # Get user input for menu selection
            choice = input("Choose an option (1 or 2): ").strip()
            
            if choice == "2":
                # Exit the program
                print("Exiting the program. Goodbye!")
                break
            elif choice == "1":
                # Get the word from the user
                word = input("Enter a word: ").strip()
                
                # Validate the word input
                if len(word.split()) > 1:
                    print("Error: Please enter only a single word.")
                    continue
                
                if not word.isalpha():
                    print("Error: Please enter a word with only alphabetic characters.")
                    continue
                 
                 # Check if the word is valid
                anagram_checker = AnagramChecker()
                print(f"\nYOUR WORD: '{word.upper()}'")
                if anagram_checker.is_valid_word(word):
                    print("This is a valid English word.")
                    # Get anagrams for the word
                    anagrams = anagram_checker.get_anagrams(word)
                    if anagrams:
                        print(f"Anagrams for your word: {', '.join(anagrams)}.")
                    else:
                        print("No anagrams found for your word.")
                    return anagrams
                
                else:
                    print("Invalid choice. Please select 1 or 2.")

                
            else:
                print(f"'{word}' is not a valid English word.")

Anagram_GUI().main()