import { useState } from "react";

const Events = () => {
  const [inputValue, setInputValue] = useState(""); // State to track the input value
  const [isToggleOn, setIsToggleOn] = useState(true); // State to track the input value

  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`The enter key was pressed, your input: ${inputValue}`);
    }

    setInputValue(event.target.value);
  };

  const toggleButton = () => {
    setIsToggleOn(prevState => !prevState); // Switch between true/false
  };


  return (
    <div>
      {/* Button with onClick event handler */}
      <button onClick={clickMe}>Click Me</button>
      <input
        type="text"
        placeholder="Press the ENTER key!"
        onKeyDown={handleKeyDown}
      />
      <button onClick={toggleButton}>{isToggleOn ? "ON" : "OFF"}</button>
    </div>
  );
};

export default Events;
