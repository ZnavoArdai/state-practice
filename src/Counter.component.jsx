import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super();

    this.state = { counter: props.num };

    this.counterUp = this.counterUp.bind(this);

    this.counterdown = this.counterdown.bind(this);
    this.counterest = this.counterest.bind(this);
  }

  counterUp() {
    console.log("");

    this.setState({ counter: this.state.counter + 1 });
  }
  counterdown() {
    console.log("")

    debugger;
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  counterest() {
    console.log("");
    this.setState({ counter: (this.state.counter = 0) });
  }
  render() {
    return (
      <>
        {this.state.counter !== 0 ? (
          <h2>{this.state.counter}</h2>
        ) : (
          <h2>zero</h2>
        )}
        <button onClick={this.counterUp}>up</button>
        <button onClick={this.counterdown}>down</button>
        <button onClick={this.counterest}>rest</button>
      </>
    );
  }
}

export default Counter;
