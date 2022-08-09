import { Component } from "react";



class Counter extends Component {
  constructor(props) {
    super();

    this.state={counter:props.num};

    this.counterUp=this.counterUp.bind(this);

    this.counterdown=this.counterdown.bind(this);
    this.counterest=this.counterest.bind(this);

  }

  counterUp(){

    this.setState({counter:this.state.counter+1})

  }
  counterdown(){
    this.setState({counter:this.state.counter-1})
  }

  counterest(){
    this.setState({counter:this.state.counter=this.props.num})
  }
  render() {
    return <>
    <h2 >{this.state.counter}</h2>
    <button onClick={this.counterUp}>up</button>
    <button onClick={this.counterdown}>down</button>
    <button onClick={this.counterest}>rest</button>
    </>;
  }
}

export default Counter;
