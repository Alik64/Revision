import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);
  return (
    <div className="App">
      {data && <div>data</div>}
      <h1>React testing</h1>
      <button>click me</button>
      <input type="text" placeholder="hello" />
    </div>
  );
}

export default App;
