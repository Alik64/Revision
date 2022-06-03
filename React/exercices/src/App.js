import React, { useState } from "react";
import "./App.css";
import Communication from "./CG/Communication";
import ListUsers from "./CG/ListUsers";
import Welcome from "./CG/Welcome";
const users = [
  { id: 1, firstname: "Alexandre", lastname: "Zegrand" },
  { id: 2, firstname: "Marie", lastname: "Rose" },
  { id: 3, firstname: "India", lastname: "Loulou" },
];

function App() {
  return (
    <>
      <UsersSorts data={users} />
    </>
  );
}

export default App;
