// import logo from './logo.svg';
import WireframePAW from './WireframePAW.png';
import './App.css';
import React from 'react';

class Pawtastic extends React.Component {

  // have acccess to usr value
  // add empty text because we are expecting text
  // this.state = { value: " "}
  state = { value: " :name"
      
  }
  
  

    // binding handles changes that are happening
    // your onClick/onChange events won’t work since they won’t have any context as to what “this” is and so it will call this.undefine.methodName() and fail
  


  render() { 
    return (     
    <div className="App">
      <header className="App-header">
        <div>
          {/* <form onSubmit = {this.handleSubmit}> */}
          <form>
            <label>
              Name: 
              {/* SUPPOSED capture what the user is inputing with ".value" */}
              {/* without onChange on Submit the values are not updated as the user types*/}
            <input />
            </label>
          </form>
        </div>
        
        {/* <img src={logo}className="App-logo" alt="logo"/> */}
        <img id="PawWireframe" src={WireframePAW}  alt="logo"/>
      </header>
    </div> );
  }
}
 
export default Pawtastic;


