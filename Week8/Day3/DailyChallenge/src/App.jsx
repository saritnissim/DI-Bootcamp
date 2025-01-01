import "./App.css";
import UserForm from "./components/UserForm";
import Summary from "./components/Summary";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "Sarit",
      lastname: "Nissim",
      age: "34",
      gender: "female",
      destination: "japan",
      nonuts: false,
      nolactose: false,
      isvegan: true,
    };
  }
  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <UserForm info={this.state} handleChange={this.handleChange} />
        <Summary info={this.state} />
      </div>
    );
  }
}
export default App;
