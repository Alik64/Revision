import React, { useState, useCallback, useEffect } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Update Items");
  }, [getItems]);

  return (
    <>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
};

const UseCallBackHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const themeDark = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    borderColor: dark ? "white" : "black",
    borderWidth: "1px",
    borderStyle: "solid",
  };

  return (
    <div style={themeDark}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((s) => !s)}>Change theme</button>
      <List getItems={getItems} />
    </div>
  );
};

function slowFunction(number) {
  const start = new Date().getTime();
  let end = start;

  while (end < start + 100) {
    end = new Date().getTime();
  }
  return number * 2;
}

export default UseCallBackHook;
