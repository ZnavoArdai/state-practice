import { Component } from "react";


class Counterr extends Component{
    constructor(props){
super();
       this.state={counter:props.num} 

       this.changeNumUp=this.changeNumUp.bind(this)
       this.changeNumdown=this.changeNumdown.bind(this)
       this.restBtn=this.restBtn.bind(this)
    }

    changeNumUp(){
        this.setState({counter:this.state.counter+1})
    }

    changeNumdown(){
        this.setState({counter:this.state.counter-1})
    }
    restBtn(){
        this.setState({counter:this.props.num})
    }
    render(){
        return(
            <>
            
            <h2>{this.state.counter}</h2>
            <button onClick={this.changeNumUp}>up</button>
            <button onClick={this.changeNumdown}>blabla</button>
            <button onClick={this.restBtn}>rest</button>
            
            </>
        )
    }


}


export default Counterr;