import { useEffect, useState } from "react";

function QuelHook() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("A");
  });
  useEffect(() => {
    console.log("B");
  }, [count]);
  useEffect(() => {
    console.log("C");
  }, []);
  const onBtnClick = () => {
    setCount((v) => v + 1);
  };
  return (
    <div>
      <button onClick={onBtnClick}>Click</button>
      <span>Count:{count}</span>
    </div>
  );
}

export default QuelHook; // A,B
