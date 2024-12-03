// Instructions

// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.
class Video {
    constructor(title, uploader, time){
        this.title = title
        this.uploader = uploader
        this.time
    }

    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!”
`)
    }
}
const video1 = new Video("Learning JavaScript", "John", 300)
video1.watch()

const video2 = new Video("Funny Cats Compilation", "Jane", 600)
video2.watch()

const videoData = [
    ["Travel Vlog: Paris", "Alice", 900],
    ["How to Bake a Cake", "Bob", 450],
    ["Tech Review: Best Phones 2024", "Chris", 800],
    ["Workout Routine", "Dana", 700],
    ["Top 10 Movie Trailers", "Eve", 600],
  ];
  
  const videos = videoData.map(data => new Video(...data));
  videos.forEach(video => video.watch());

