import { useState } from 'react'
import Garage from './Garage'

// Functional component receiving car info as props
const Car = ({ model }) => {
  const [color] = useState("red"); // Default car color is red
  return (
    <div>
      <h2>This car is a {color}{model}</h2>
      <Garage size="small" /> 
    </div>
  );
};

export default Car;
