import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    };
  }

  render() {
    return (
      <div className="App">
        <header>Number: {this.state.number}</header>
        <button>Generate Random number </button>
      </div>
    );
  }
}

export default App;
