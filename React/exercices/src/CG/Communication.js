import React, { useState } from "react";

const Communication = ({ initial }) => {
  const [value, setValue] = useState(initial);
  const changeValue = (val) => {
    setValue(val);
  };
  return (
    <div>
      <h1>{value}</h1>
      <Child value={value} changeValue={changeValue} />
    </div>
  );
};

function Child({ value, changeValue }) {
  const handleChange = (e) => {
    changeValue(e.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
export default Communication;
