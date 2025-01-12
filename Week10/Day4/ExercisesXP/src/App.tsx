import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <h1 style={{ color: "teal" }}>Exercise 1</h1>
      <p>Hello World</p>
      <h1 style={{ color: "teal" }}>Exercise 2</h1>
      <Greeting name="Sarit" messageCount={5} />
      <h1 style={{ color: "teal" }}>Exercise 3</h1>
      <Counter />
      <h1 style={{ color: "teal" }}>Exercise 4</h1>
      <UserCard name="Sarit" role="Admin" />
      <h1 style={{ color: "teal" }}>Exercise 5</h1>
      <UserList />
    </>
  );
}

export default App;
