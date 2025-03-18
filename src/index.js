import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './index.css'
import { render } from '@testing-library/react';



class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
    initialNumber: 0
    }

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);

    
  }

  increase(){
    if(this.state.initialNumber >= 10){
      alert("Maximum Reached");
      return;
    }
    this.setState((state) => ({
      initialNumber: this.state.initialNumber + 1
    }))
  }

  decrease(){

    if(this.state.initialNumber <= 0){
      alert("Minimum Reached");
      return;
    }
    else{
      this.setState((state) => ({
        initialNumber: this.state.initialNumber - 1
      }))
    }

  }

  render(){
    return(
      <>

<div className='start'>
      <NumberBox initialNumber={this.state.initialNumber} />
      <Buttons increase={this.increase} decrease={this.decrease} />
    </div>
      
      </>
    )
  }
}

const NumberBox = (props) => {
  return(
    <>
    <div className='start'>
      <h1>{props.initialNumber}</h1>
      
    </div>
    </>
  )
}

 class Buttons extends React.Component{
  constructor(props){
    super(props)
  }
 
  render(){
    return(
    
    <>
    <div className="buttonPalette">
      <button onClick={this.props.increase}  className="increment">increment</button>
      <button onClick={this.props.decrease}  className="decrement">decrement</button>
    </div>
    </>

    )
  }
  
} 


const myDiv = document.getElementById("myDiv");
const root = ReactDOM.createRoot(myDiv);
root.render(<App />);