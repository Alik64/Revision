import React, { useState, useMemo, useEffect } from "react";

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeDark = useMemo(
    () => ({
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      borderColor: dark ? "white" : "black",
      borderWidth: "1px",
      borderStyle: "solid",
    }),

    [dark]
  );
  useEffect(() => {
    console.log("useeffect thee dark");
  }, [themeDark]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((s) => !s)}>Change theme</button>
      <div style={themeDark}>{doubleNumber}</div>
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

export default UseMemoHook;
