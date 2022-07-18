import React from "react";

const Hello = ({ name, bar, val }) => (
  <div>
    {name ? <span>Hello {name}</span> : null}
    {bar && <span> foo = {bar}</span>}
    {val && <span> val = {val}</span>}
  </div>
);

export const data = {
  bar: 4,
  val: null,
};

export default Hello;

// <Hello name="Hello" {...data} />; Hello world foo=4
