import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");

  const handleClick = () => {
    setToggle((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);
  return (
    <div className="App">
      <h1 data-testid="value-elem">{text}</h1>
      {toggle && <div data-testid="toggle-elem">toggle</div>}
      {data && <div>data</div>}
      <h1>React testing</h1>
      <button data-testid="toggle-btn" onClick={handleClick}>
        click me
      </button>
      <input type="text" placeholder="hello" onChange={handleInputChange} />
    </div>
  );
}

export default App;
