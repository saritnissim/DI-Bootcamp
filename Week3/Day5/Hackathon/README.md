Relaxing Sound Player 🎵

The Relaxing Sound Player is a simple Python application designed to help you unwind with relaxing sounds. Whether it’s the sound of rain, ocean waves, or forest sounds, this app provides a calming experience.

Features 🌟

Play Specific Sounds
Choose and play any relaxing sound manually.
Save and Retrieve Favorite Sounds
Save your preferred sound type to a database for quick access later.
Simple Command-Line Interface (CLI)
Intuitive and easy-to-use menu system.

Installation 🚀

Prerequisites
Install required Python libraries:
pip install requests playsound
Setup Instructions
Clone this repository:
git clone https://github.com/your-username/relaxing-sound-player.git #TODO: Edit later
cd relaxing-sound-player
Add relaxing sound files:
Place your sound files in a folder named sounds/.
Example:
sounds/rain.mp3
sounds/ocean.mp3
sounds/forest.mp3
Create a sounds_config.json file to map weather conditions to sounds:
{
    "rain": "sounds/rain.mp3",
    "clear": "sounds/ocean.mp3",
    "clouds": "sounds/forest.mp3"
}
Set up the database:
python relaxing_sound_player.py
# The database will be automatically created on the first run.
Get an API key from OpenWeatherMap and add it to the script:
WEATHER_API_KEY = "your_openweathermap_api_key"
Usage 📖

Run the application:
python relaxing_sound_player.py
Use the menu options:
Fetch and play a sound based on the current weather.
Manually select and play a sound.
Save a favorite sound for quick playback.
Exit the application.
Example Output 💻

Welcome to the Relaxing Sound Player!

Menu:
1. Get current weather and play suggested sound
2. Play a specific sound
3. Save favorite sound
4. Play favorite sound
5. Exit
Choose an option: 
Technologies Used 🛠️

Python: Core language for development.
SQLite: Database to store user preferences.
OpenWeatherMap API: Fetch weather data.
Playsound: Sound playback library.
JSON: Configuration for sound mapping.
Future Improvements 🚀

Add looping for continuous sound playback.
Enhance the user interface with a graphical option (e.g., Tkinter).
Add support for more weather conditions and sound types.
Integrate geolocation to fetch weather automatically based on the user's location.
Contributing 🤝

Feel free to fork this repository and submit pull requests. Contributions are welcome!

License 📜

This project is licensed under the MIT License. See the LICENSE file for details.

Enjoy a more relaxing day! 😊