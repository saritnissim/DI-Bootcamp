import random
import psycopg2
import requests

# Connect to the database
connection = psycopg2.connect(
dbname='countries',
user='postgres',
password='root',
host='localhost'
)
cursor = connection.cursor()

# Get all the countries from the API
response = requests.get("https://restcountries.com/v3.1/all")
if response.status_code == 200:
    all_countries = response.json()
    random_sample = random.sample(all_countries, 10)
    print(random_sample)

    # # Write to the database
    for country in random_sample:
        print(country)
        query = f'''INSERT INTO random_countries(name, capital, flag_code, subregion, population)
        VALUES ('{country['name']['common']}', '{country['capital'][0]}', '{country['flag']}', '{country['subregion']}', '{country['population']}')'''
        cursor.execute(query)

# Close the connection 
    connection.commit()
    cursor.close()
    connection.close()

else:
    print("Failed to retrieve data. Status code:", response.status_code)
