import React, { useState } from "react";
import "./App.css";
import Color from "./CG/Color";
import { Counter } from "./CG/Counter";
import Hello from "./CG/Hello";
import { data } from "./CG/Hello";

import Warning from "./CG/Warning";

import UseContextHook from "./Hooks/UseContextHook";

function App() {
  return (
    <>
      <Result getNewResult={() => "texlxnfldjgnort"} />
    </>
  );
}

export default App;

function Result({ getNewResult }) {
  const [result, setResult] = useState(null);

  function handleClick() {
    setResult(getNewResult());
  }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {result != null && <span>{result}</span>}
    </div>
  );
}
