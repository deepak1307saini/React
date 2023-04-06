
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello  from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App" >

        <Counter/>
         
        {/* <Message/> */}

        {/* <Greet name="Deepak" heroName="Batman">
            <p>This is children props</p>
          </Greet> 
        {/* props to pass data from one component to other components as an argument.  */}
        {/* <Greet name="Mohit" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Rahul" heroName="Wonder Women"/>
        
        <Welcome name="Deepak" heroName="Batman"/>
        <Welcome name="Mohit" heroName="Superman"/>
        <Welcome name="Rahul" heroName="Wonder Women"/> 
         */}
      </div>
    );
  }


}

export default App;
