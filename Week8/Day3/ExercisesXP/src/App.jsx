import { Component } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Color from "./components/Color";

class BuggyCounter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  handleClick = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };
  render() {
    const { counter } = this.state;
    if (counter === 5) {
      throw new Error("I crashed");
    }
    return <h1 onClick={this.handleClick}>{counter}</h1>;
  }
}

function App() {
  return (
    <div>
      <h1 style={{ color: "teal" }}>Exercise 1</h1>
      <p>
        These two counters are inside the same error boundary. If one crashes,
        the error boundary will replace both of them.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <p>
        This counter is not inside of boundary. So if crashes, all other
        components are deleted.
      </p>
      <BuggyCounter />
      <h1 style={{ color: "teal" }}>Exercise 2</h1>
      <Color />
    </div>
  );
}

export default App;
