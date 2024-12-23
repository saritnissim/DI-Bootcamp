import { useState } from 'react';

const Phone = () => {
  // Declare state variables using the useState hook
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year] = useState(2020);

  const changeColor = ()  => {
    setColor("blue")
  }
  return (
    <div>
      <h1>Phone Information</h1>
      <p>Brand: {brand}</p>
      <p>Model: {model}</p>
      <p>Color: {color}</p>
      <p>Year: {year}</p>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};
export default Phone