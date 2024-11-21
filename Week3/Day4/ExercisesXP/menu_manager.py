import psycopg2
from menu_item import MenuItem


class MenuManager:
    @staticmethod
    def _connect():
        connection = psycopg2.connect(
            database='restaurant_menu',  
            user='postgres',          
            password='root',       
            host='localhost',
            port='5432' 
        )
        return connection
      
    # Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, 
    # if an object is not found (there is no item matching the name in the get_by_name method) return None.
    @classmethod
    def get_by_name(cls, name):
        connection = cls._connect()
        query = f"SELECT * FROM menu_items WHERE item_name = '{name}'"

        cursor = connection.cursor()
        cursor.execute(query)
        results = cursor.fetchone()
        
        connection.commit()
        
        cursor.close()
        connection.close()
        
        return MenuItem(results[1], results[2])



# Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.
    @classmethod
    def all_items(cls):
        connection = cls._connect()
        query = "SELECT * FROM menu_items"
        
        cursor = connection.cursor()
        cursor.execute(query)
        results = cursor.fetchall()
        
        connection.commit()
        
        cursor.close()
        connection.close()

        # Return a list of MenuItem objects
        return [MenuItem(item[1], item[2]) for item in results]
    
burger = MenuItem('Burger', 35)
beef_stew = MenuItem('Beef Stew', 40)
noodles = MenuItem('Noodles', 20)

#Save 3 menu items
burger.save()
beef_stew.save()
noodles.save()

# Delete noodles
noodles.delete()

#Change burger to veggie burger and change price
burger.update('Veggie Burger', 37)

#Fetch items
item2 = MenuManager.get_by_name('Beef Stew')
items = MenuManager.all_items()
print(items)