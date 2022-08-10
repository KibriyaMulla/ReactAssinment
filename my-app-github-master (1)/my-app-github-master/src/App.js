import './App.css';
import FirstComponent from './Component/FirstComponent';
import SecondComponent from './Component/SecondComponent';
import { Component, useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import Record from './routingcomp/Record';
import ThirdComponent from './Component/ThirdComponent';


function App() {
  const [name, setName] = useState("Kibriya");

  const Update = () => {
    setName("Riya");
  };
  
  return (
    <div className="App">
      <header className="App-header">
        
      <nav>
        <Link to="/Record">Record</Link>
      </nav>

        <FirstComponent />
        <SecondComponent title={name} />
        <ThirdComponent/>
    
        <Record/>

        <button onClick={Update}>Update Name</button>
        <button onClick={() => {
          console.log("Button Clicked")
        }}> Test

        </button>
      </header>
     
    </div>
  );
}

export default App;
