import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      number: Math.floor(Math.random() * 7 + 1)
    }));
  }

  render() {
    return (
      <div className="App">
        <header>
          Number: {this.state.number === 7 ? "You Win" : this.state.number}
        </header>
        <button
          onClick={this.handleClick}
          disabled={this.state.number === 7 ? true : false}
        >
          Generate Random number{" "}
        </button>
      </div>
    );
  }
}

export default App;
