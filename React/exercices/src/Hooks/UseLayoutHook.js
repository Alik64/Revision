import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const Heading = () => {
  return <h1>This is a heading</h1>;
};

const UseLayoutHook = () => {
  const refBtn = useRef(null);
  const popUpRef = useRef();
  const [isVisible, setVisible] = useState();

  useEffect(() => {
    console.log("#### : update1");
  });
  useEffect(() => {
    console.log("#### : update2");
  });

  useLayoutEffect(() => {
    console.log("#### : useLayoutEffect");

    if (!isVisible) return;

    const { bottom } = refBtn.current.getBoundingClientRect();
    popUpRef.current.style.top = `${bottom + 25}px`;
    console.log("#### : Heading");
  }, [isVisible]);

  useEffect(() => {
    console.log("#### : update3");
  });

  const style = {
    backgound: "#0000",
    color: "#fff",
    position: "relative",
  };

  return (
    <>
      <button ref={refBtn} onClick={() => setVisible((s) => !s)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && (
        <div ref={popUpRef} style={style}>
          This is a hidden block
          <div>
            <Heading />
          </div>
        </div>
      )}
    </>
  );
};

export default UseLayoutHook;
