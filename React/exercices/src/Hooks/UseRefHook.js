import React, { useRef, useState } from "react";

const UseRefHook = () => {
  const [width, setWidth] = useState(10);
  const [text, setText] = useState("");
  const box = useRef(null);
  const inputText = useRef(null);
  const handleChangeWidth = () => {
    setWidth(box.current.offsetWidth + 5);
  };

  const handleTextInputText = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <button onClick={handleChangeWidth}>change box width</button>
      <div ref={box} style={{ background: "darkblue", width }}>
        BOX
      </div>
      <input type="text" ref={inputText} onChange={handleTextInputText} />
      <div>{text}</div>
    </div>
  );
};

export default UseRefHook;
