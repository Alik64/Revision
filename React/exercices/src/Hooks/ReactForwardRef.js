import React, { useImperativeHandle, useRef, useState } from "react";

const Input = React.forwardRef((props, ref) => {
  const [type, setType] = useState();
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    changeType: () => {
      console.log("Type has been changed");
      console.log(ref);
      setType("password");
    },
    onFocus: () => {
      inputRef.current.focus();
    },
  }));

  //   return <input ref={ref} type="text" />; using without useImperativeHandle()
  return <input ref={inputRef} type={type} />;
});

const ReactForwardRef = () => {
  const ref = useRef(null);

  return (
    <div>
      <button onClick={() => ref.current.changeType()}>Change type</button>
      <button onClick={() => ref.current.onFocus()}>onFocus</button>
      <Input ref={ref} />
    </div>
  );
};

export default ReactForwardRef;
