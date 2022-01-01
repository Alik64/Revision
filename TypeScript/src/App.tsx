import React from 'react';
import logo from './logo.svg';
import './App.css';

// ______ BAsic ______
 
let a : number | null = 10;// soit number, soit null
let name : string = "Happy new year"
let sammuray : boolean | null = true; // soit boolean, soit null
sammuray = null;

//---- Arrays -----//

let names : Array<string> =['Jack', "Marie", " Neo"]
let names2 : string [] =['Jack', "Marie", " Neo"] // 2ème methode
console.log(names[0].toUpperCase())

// ____ STRING ___ //

let sex: "male" | "female"
sex="male" 
// sex="man" // erreur

//______Objects______//
type AdressType = {
  city: string
  country: string
}

type UserType = {
  sayHello: Function
  name : string
  age: number
  isSamuray: boolean
  adress: AdressType | null
}
let user:UserType ={
  sayHello(message:string) {console.log('yo')},
  name: "Neo",
  age: 33,
  isSamuray: true,
  adress: {
    city: "NewYork",
    country: "USA"
  }
}
console.log(user.name)


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
