import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  increase() {
    this.setState ({
      counter:this.state.counter + 1,
    });
  }
  
  decrease() {
    this.setState ({
      counter:this.state.counter - 1,
    });
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>Counter : {counter}</h1>
        <button onClick = {this.increase}>Increament</button>
        <button onClick = {this.increase}>Decreament</button>
      </div>
    );
  }
}

export default App;
