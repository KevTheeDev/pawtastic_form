import logo from './logo.svg';
import WireframePAW from './WireframePAW.png';
import './App.css';
import React, { Component } from 'react';

class Pawtastic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (     
    <div className="App">
      <header className="App-header">
        <img src={logo}className="App-logo" alt="logo"/>
        <img src={WireframePAW}  />
      </header>
    </div> );
  }
}
 
export default Pawtastic;


