import "./App.css";
import Car from './Components/Car'
import Color from "./Components/Color";
import Events from "./Components/Events";
import Phone from "./Components/Phone";
function App() {
  const carinfo = { name: "Ford", model: "Mustang" };
  return (
    <div className="App">
      <h1 style={{color:'teal'}}>Exercise 1</h1>
      <Car car={carinfo} />
      <h1 style={{color:'teal'}}>Exercise 2</h1>
      <Events />
      <h1 style={{color:'teal'}}>Exercise 3</h1>
      <Phone/>
      <h1 style={{color:'teal'}}>Exercise 4</h1>
      <Color/>
    </div>
  );
}
export default App;
