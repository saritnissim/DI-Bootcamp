from menu_item import MenuItem
from menu_manager import MenuManager



# Create a file called menu_editor.py , which will have the following functions:
# show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
# View an Item (V)
# Add an Item (A)
# Delete an Item (D)
# Update an Item (U)
# Show the Menu (S)
# Call the appropriate function that matches the user’s input.
@staticmethod
def show_user_menu():
    """
    Displays the program menu and prompts the user to choose an option.
    Calls the appropriate method based on user input.
    """
    while True:
        # Display the menu options
        print("\n----- User Menu -----")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Menu")
        print("Q - Quit")

        # Ask for user input
        choice = input("Please choose an option: ").strip().upper()

        # Call the corresponding method based on user choice
        if choice == 'V':
            item_name = input("Enter the name of the item to view: ").strip()
            menu_item = MenuManager.get_by_name(item_name)
            print(menu_item)
        
        elif choice == 'A':
            add_item_to_menu()
        
        elif choice == 'D':
            remove_item_from_menu()    
        
        elif choice == 'U':
            update_item_from_menu()
        
        elif choice == 'S':
            show_restaurant_menu()
        
        elif choice == 'Q':
            print("Exiting the program...")
            show_restaurant_menu()
            break  # Exit the loop and end the function
        
        else:
            print("Invalid choice, please try again.")

# add_item_to_menu() - this function should ask the user to input the item’s name and price. 
# This function will not interact with the menu itself, but simply create a MenuItem object and call the
#  appropriate function from the MenuItem object.
# If the item was added successfully print a message which states: item was added successfully.
def add_item_to_menu():
    name = input("Enter the name of the new item: ").strip()
    price = float(input("Enter the price of the new item: ").strip())
    new_item = MenuItem(name, price)
    try:
        new_item.save()
        print("Your item was saved")
    except:
        print("Error in saving")

# remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. 
# This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was deleted successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.
def remove_item_from_menu():
    item_name = input("Enter the name of the item to delete: ").strip()
    menu_item = MenuManager.get_by_name(item_name)
    try:
        menu_item.delete()
        print("Your item has been successfully deleted")
    except:
        print("Error when deleting")


        
# update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was updated successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.
def update_item_from_menu():
    item_name = input("Enter the name of the item to update: ").strip()
    old_item = MenuManager.get_by_name(item_name)

    new_name = input(f"Enter the new name for '{item_name}': ").strip()
    new_price = float(input(f"Enter the new price for '{item_name}': ").strip())
    
    try:
        old_item.update(new_name, new_price)
        print(f"Item '{item_name}' has been updated.")
    except:
        print(f"Error updating")

# show_restaurant_menu() - print the restaurant’s menu.
def show_restaurant_menu():
    items = MenuManager.all_items()
    if items:
        print("\nMenu Items:")
        for item in items:
            print(f"Name: {item.name}, Price: {item.price}")
    else:
        print("There is nothing on the menu")

show_user_menu()