import psycopg2

# I created database 'restaurant_menu' and table 'menu_item'
# CREATE TABLE menu_items (
# 	item_id SERIAL PRIMARY KEY,
# 	item_name VARCHAR(30) NOT NULL,
# 	item_price SMALLINT DEFAULT 0
# )

class MenuItem:
# Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table. 
# The update method can update the name as well as the price of an item.
    def __init__(self, name, price):
        self.name = name
        self.price = price
        
    @staticmethod
    def _execute(query):
        connection = psycopg2.connect(
            database='restaurant_menu',  
            user='postgres',          
            password='root',       
            host='localhost',
            port='5432' 
        )
        cursor = connection.cursor()
        
        cursor.execute(query)
        connection.commit()
        
        cursor.close()
        connection.close()
    
    def save(self):
       query = f"INSERT INTO menu_items (item_name, item_price) VALUES ('{self.name}', {self.price})"
       self._execute(query)

    def delete(self):
        query = f"DELETE FROM menu_items WHERE item_name = '{self.name}' AND item_price = {self.price}"
        self._execute(query)

    def update(self, new_name, new_price):
        query = f"UPDATE Menu_Items SET item_name = '{new_name}', item_price = {new_price} WHERE item_name = '{self.name} AND '"
        self._execute(query)