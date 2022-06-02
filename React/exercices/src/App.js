import React, { useState } from "react";
import "./App.css";
import ListUsers from "./CG/ListUsers";
import Welcome from "./CG/Welcome";

function App() {
  const users = [
    { firstName: "Ada", lastName: "Lovelace" },
    { firstName: "Donald", lastName: "Knuth" },
  ];

  return (
    <>
      <ListUsers users={users} />
    </>
  );
}

export default App;
