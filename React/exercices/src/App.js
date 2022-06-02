import React, { useState } from "react";
import "./App.css";
import Welcome from "./CG/Welcome";

function App() {
  return (
    <>
      <Parent value={43} />
    </>
  );
}

function Parent({ value }) {
  return <Hex value={value} component={(props) => <Child {...props} />} />;
}

function Hex({ value, component }) {
  let hexedValue = value.toString(16);
  const Child = component;

  return (
    <div id="hexed">
      <Child value={hexedValue} />
    </div>
  );
}
function Child({ value }) {
  return <div id="child">0x{value}</div>;
}
export default App;
