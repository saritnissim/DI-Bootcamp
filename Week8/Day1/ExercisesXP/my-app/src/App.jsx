import "./App.css";
import UserFavoriteAnimals from "./components/UserFavoriteAnimals";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  const cities = [
    {
      src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
      alt: "Hong Kong",
    },
    {
      src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp",
      alt: "Macao",
    },
    {
      src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp",
      alt: "Japan",
    },
    {
      src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp",
      alt: "Las Vegas",
    },
  ];

  return (
    <div>
      {/* Exercise 1 */}
      {/* Part 1 */}
      <p>Hello World!</p>

      {/* Part 2 */}
      {myelement}

      {/* Part 3 */}
      <p>React is {sum} times better with JSX</p>

      {/* Exercise 2 */}
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>

      <UserFavoriteAnimals favAnimals={user.favAnimals} />

      {/*Daily Challenge */}
      <h1>Travel Destinations Carousel</h1>
      <Carousel>
        {cities.map((city, index) => (
          <div key={index}>
            <img src={city.src} alt={city.alt} />
            <p className="legend">{city.alt}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
