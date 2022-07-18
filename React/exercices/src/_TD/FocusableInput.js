import { useEffect, useRef } from "react";

// solution 1
const FocusableInput = (props) => {
  const { shouldFocus } = props;
  const emailInputRef = useRef(shouldFocus);

  useEffect(() => {
    emailInputRef && emailInputRef.current.focus();
  }, []);
  return <input ref={emailInputRef} />;
};

export default FocusableInput;
