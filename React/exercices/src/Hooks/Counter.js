import React, { useState, useReducer } from "react";

const ARR = [1, 2, 3, 4, 5];

export default function Counter(props) {
  const [count, setCount] = useState(() => {
    if (ARR.length > 0) {
      return ARR.reduce((acc, item) => acc + item);
    }
    return 0;
  });

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => handleIncrement()}>+</button>
      <button onClick={() => handleDecrement()} disabled={count === 0}>
        -
      </button>
    </div>
  );
}
