// import logo from './logo.svg';
import WireframePAW from './WireframePAW.png';
import './App.css';
import React from 'react';

class Pawtastic extends React.Component {
  constructor(props) {
    super(props);
    // have acccess to usr value
    // add empty text because we are expecting text
    this.state = { value: " :name" }

    // binding handles changes that are happening
    // your onClick/onChange events won’t work since they won’t have any context as to what “this” is and so it will call this.undefine.methodName() and fail
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(e){
  this.setState({ value: e.target.value})
}

handleSubmit(e){
  e.preventDefault();
}

  render() { 
    return (     
    <div className="App">
      <header className="App-header">
        <form onSubmit = {this.handleSubmit}>
          <label>
            Name: 
            {/* capture what the user is inputing with ".value" */}
            {/* without onChange the values are not updated as the user types*/}
          <input type='text' onClick={ this.handleChange } />
          </label>
        </form>

        {/* <img src={logo}className="App-logo" alt="logo"/> */}
        <img id="PawWireframe" src={WireframePAW}  alt="logo"/>
      </header>
    </div> );
  }
}
 
export default Pawtastic;


