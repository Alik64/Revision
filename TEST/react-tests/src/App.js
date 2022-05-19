import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prevState) => !prevState);
  };
  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);
  return (
    <div className="App">
      {toggle && <div data-testid="toggle-elem">toggle</div>}
      {data && <div>data</div>}
      <h1>React testing</h1>
      <button data-testid="toggle-btn" onClick={handleClick}>
        click me
      </button>
      <input type="text" placeholder="hello" />
    </div>
  );
}

export default App;
