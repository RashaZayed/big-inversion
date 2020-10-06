import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
     <PersonCard lastName='Rendell' firstName='Augisanda'age={29} hairColor='black'/>
     <PersonCard lastName='Zayed' firstName="Rasha" age={30} hairColor='brown'/>
     <PersonCard lastName='Dunbabin' firstName='Megan' age={30} hairColor='brown'/>
     <PersonCard lastName='Abdelhady' firstName='Khaled' age={29} hairColor='brwon'/> 
    </div>
  );
}

export default App;
