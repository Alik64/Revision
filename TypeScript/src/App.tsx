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
  city?: string // ? - veut dire que la proprièté n'est pas obligatoire
  country: string
}

type UserType = {
  sayHello?: (message:string)=> void // void => return rien
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
//_______fonctions_______//

const summ = (a: number ,b:number)=>{ // paramètres typisés !
  return a+b
}

// Bonus ------------------
// type InitialStateType = {
  
//   name : string
//   age: number
//   isSamuray: boolean
//   adress: AdressType | null
// }
let initialState ={
  name: null as string | null,
  age: null as number | null,
  isSamuray: null as boolean | null,
  adress: [] as Array<AdressType>,
  counter:null as number | null,
}
export type InitialStateType = typeof initialState // générer le type à partir de InitialState

// let state: InitialStateType={
// adress:{
//   country:"usa"
// } ...
// }

//_________________ ACtions

let GET_TASKS = "APP/GetTASKS"

type GetTasksActionType ={
  id:number
  type: typeof GET_TASKS
}

let action:GetTasksActionType = {
  type: GET_TASKS,
  id:12
}


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
