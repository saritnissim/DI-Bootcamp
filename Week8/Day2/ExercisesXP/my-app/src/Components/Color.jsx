import { useState, useEffect } from "react";

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
    setFavoriteColor("yellow")
  }, []);

  const changeColor = () => {
    setFavoriteColor("blue")
  }
  return (
    <div>
      <p>My favorite color is {favoriteColor}</p> {/* Output the value of favoriteColor */}
      <button onClick={changeColor}>Change to Blue</button>
    </div>
  );
};
export default Color;
