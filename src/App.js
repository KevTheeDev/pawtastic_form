// import logo from './logo.svg';
import WireframePAW from './WireframePAW.png';
import './App.css';
import React from 'react';

class Pawtastic extends React.Component {

  // have acccess to usr value
  // add empty text because we are expecting text
  // this.state = { value: " "}
  state = { 
    name: ' ',
    breed: ' ',
    birthday: ' ',
    gender: ' ',
    spayed_Neutered: ' ',
    weight: ' ',

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
              {/* without onChange on Submit the values are not updated as the user types*/}
            <input placeholder='Pet Name' 
            value={this.state.name} 
            onChange={e => this.setState({name: e.target.value})} />
            
            {/* // capture what user is inputing with ".value" 
            // value = this.state.'value' 
            // adds event listener (e)
            // this.setState is used to change what's in state because if not it'll remain immutable */}
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


