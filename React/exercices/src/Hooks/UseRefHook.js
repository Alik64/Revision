import React, { useRef, useState } from "react";

const UseRefHook = () => {
  const [text, setText] = useState("");

  const handleChange = () => {};

  const handleTextInputText = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <button onClick={handleChange}>change box width</button>
      <div>
        <input type="text" onChange={handleTextInputText} />
      </div>
      <div>{text}</div>
    </div>
  );
};

export default UseRefHook;
