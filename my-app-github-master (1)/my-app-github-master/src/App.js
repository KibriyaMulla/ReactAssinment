import './App.css';
import FirstComponent from './Component/FirstComponent';
import SecondComponent from './SecondComponent';
import { useEffect, useState } from 'react';
function App() {
  const [name, setName] = useState("Kibriya");

  const Update = () => {
    setName("Riya");
  };
  useEffect = (() => {
    // console.log(name)
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((response) => console.log(response));
    console.log(name);


  }, [name]);

  return (
    <div className="App">
      <header className="App-header">

        <FirstComponent />
        <SecondComponent title={name} />

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
