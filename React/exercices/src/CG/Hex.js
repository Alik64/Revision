import React from "react";

function Parent({ value }) {
  return null;
}

function Hex({ value, component }) {
  return <div id="hexed"></div>;
}
function Child({ value }) {
  return <div id="child">{value}</div>;
}

export default Hex;
