import React from "react";
import gatewayTimeout from "./gatewayTimeout";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    return this.state.error ? gatewayTimeout() : this.props.children;
  }
}

export default ErrorBoundary;
