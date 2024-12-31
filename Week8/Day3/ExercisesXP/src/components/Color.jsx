import { Component } from "react";
class Color extends Component {
  constructor() {
    super();
    // Initialize the state with favoriteColor
    this.state = {
      favoriteColor: "red",
      show: true,
    };
  }

  // Function to update favoriteColor state
  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  handleDelete = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    // Set a timer to change the color to 'yellow' after 2 seconds
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }

  //Lifecycle method - Called when the component updates
  componentDidUpdate() {
    console.log("After update");
  }

  shouldComponentUpdate() {
    // Return true to ensure the component re-renders on state changes
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("in getSnapshotBeforeUpdate");
  }

  // Function to toggle the show state (to mount/unmount Child component)
  toggleChild = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { favoriteColor, show } = this.state;
    return (
      <div>
        <h1>My Favorite Color is {favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
        <h1 style={{ color: "teal" }}>Exercise 3</h1>
        {show ? <Child /> : null}
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        {/* Render the children passed from the parent */}
        {this.props.children}
      </div>
    );
  }

  componentWillUnmount() {
    console.log("Child component is about to be unmounted");
  }
}

export default Color;
export { Child };
