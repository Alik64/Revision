import React, { useState } from "react";
import "./App.css";
import Communication from "./CG/Communication";
import ListUsers from "./CG/ListUsers";
import Welcome from "./CG/Welcome";
// const users = [
//   { id: 1, firstname: "Alexandre", lastname: "Zegrand" },
//   { id: 2, firstname: "Marie", lastname: "Rose" },
//   { id: 3, firstname: "India", lastname: "Loulou" },
// ];

const users = [
  { firstName: "Ada", lastName: "Lovelace" },
  { firstName: "Donald", lastName: "Knuth" },
];

function App() {
  return (
    <>
      <ListUsers />
    </>
  );
}

export default App;
