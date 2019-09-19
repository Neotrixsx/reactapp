import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
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
        <button onClick = {this.decrease}>Decreament</button>
      </div>
    );
  }
}

export default App;
