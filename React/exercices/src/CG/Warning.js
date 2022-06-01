import React from "react";

function Warning(props) {
  if (!props.warn) {
    return null;
  }

  return <div>Warning!</div>;
}

export default Warning;
