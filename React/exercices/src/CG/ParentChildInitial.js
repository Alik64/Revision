import React, { useState } from "react";

function Child({ value, changeValue }) {
  function handleChange(event) {
    changeValue(event.target.value);
  }
  return (
    <div>
      <input id="input" value={value} onChange={handleChange} />
    </div>
  );
}

function Parent({ initial }) {
  const [value, setValue] = useState(initial);
  const changeValue = (val) => {
    setValue(val);
  };
  return (
    <div>
      <div id="value">{value}</div>
      <Child value={value} changeValue={changeValue} />
    </div>
  );
}
export default Parent;
