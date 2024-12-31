import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <details style={{ whiteSpace: "pre-wrap" }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
