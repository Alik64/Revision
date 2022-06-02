import React, { useState } from "react";
import "./App.css";
import Communication from "./CG/Communication";
import ListUsers from "./CG/ListUsers";
import Welcome from "./CG/Welcome";

function App() {
  return (
    <>
      <Communication initial="test" />
    </>
  );
}

export default App;
