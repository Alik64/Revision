import React from "react";

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

export default Parent;
