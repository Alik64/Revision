import React, { useEffect, useRef, useState } from "react";

const SaveName = ({ onSave }) => {
  const [name, setName] = useState(() =>
    localStorage.getItem("name") ? localStorage.getItem("name") : ""
  );
  const inputRef = useRef(name);

  useEffect(() => {
    inputRef.current = name;
  }, [name]);

  useEffect(() => {
    return () => {
      localStorage.setItem("name", inputRef.current);
    };
  }, []);

  const handleClick = () => {
    onSave && onSave();
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Save</button>
    </div>
  );
};

const UseRefSaveName = () => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow((prevState) => !prevState);
  };
  return (
    <div>
      <div>
        <button onClick={handleClick}>{isShow ? "Hide" : "Show"}</button>
      </div>
      {isShow && <SaveName onSave={handleClick} />}
    </div>
  );
};

export default UseRefSaveName;
