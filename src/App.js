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
      <header className="App-header">
        <div>
          <h1> Yay, we love dogs! Give us </h1>
          <h1> the basics about your pup. </h1>
          <form>
            <div className="formflexbox">
              <p>Name</p>
              <input id="formSub" placeholder="Pet Name" 
              value={this.state.name} 
              onChange={e => this.setState({name: e.target.value})} />

              {/* 
              // capture what user is inputing with ".value" 
              // value = this.state.'value' 
              // adds event listener (e)
              // this.setState is used to change what's in state because if not it'll remain immutable 
              // without onChange on Submit the values are not updated as the user types
              */}

            <form>
              <p>Breed</p>
              <input id="formSub" placeholder="Pet Name" 
              value={this.state.breed} 
              onChange={e => this.setState({breed: e.target.value})} />
            </form>


            <form>
              <p>Birthday</p>
              <input id="formSub" placeholder="Pet Name" 
              value={this.state.birthday} 
              onChange={e => this.setState({birthday: e.target.value})} />
            </form>

            <form>
              <p>Gender</p>
              <input id="formSub" placeholder="Pet Name" 
              value={this.state.gender} 
              onChange={e => this.setState({gender: e.target.value})} />
            </form>

            <form>
              <p>Spayed or Neutered</p>
              <input id="formSub" placeholder="Pet Name" 
              value={this.state.spayed_Neutered} 
              onChange={e => this.setState({spayed_Neutered: e.target.value})} />
            </form>

            <form>
              <p>Weight</p>
              <input id="formSub" placeholder="Pet Name" 
              value={this.state.weight} 
              onChange={e => this.setState({weight: e.target.value})} />
            </form>
          </div>
          </form>
           
          <div className='btnwrap'>          
          <button id="backBtn" >Back</button>
          <button id="nextBtn" >Next</button>
          </div>
 
        </div>
        
        {/* <img src={logo}className="App-logo" alt="logo"/> */}
        <img id="PawWireframe" src={WireframePAW}  alt="logo"/>
      </header>
     );
  }
}
 
export default Pawtastic;


