import React, { useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  return <input ref={ref} type="text" />;
});

const ReactForwardRef = () => {
  const ref = useRef(null);

  return (
    <div>
      <button onClick={() => ref.current.focus()}>onFocus</button>
      <Input ref={ref} />
    </div>
  );
};

export default ReactForwardRef;
