
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello  from './components/Hello';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Greet name="Deepak" heroName="Batman"/> //props to pass data from one component to other components as an argument. 
        <Greet name="Mohit" heroName="Superman"/>
        <Greet name="Rahul" heroName="Wonder Women"/>
        
        {/* <Welcome />
        <Hello/> */}
      </div>
    );
  }


}

export default App;
