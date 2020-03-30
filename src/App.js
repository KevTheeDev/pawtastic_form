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



  }
  render() { 
    return (     
    <div className="App">
      <header className="App-header">
        <form>

        </form>

        {/* <img src={logo}className="App-logo" alt="logo"/> */}
        <img src={WireframePAW}  alt="logo"/>
      </header>
    </div> );
  }
}
 
export default Pawtastic;


