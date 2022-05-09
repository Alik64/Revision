import React, { useRef, useState } from "react";

const MultipleInputs = () => {
  const ref = useRef(null);
  const [form, setForm] = useState({});

  const handleFormInputText = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    ref.current.reset();
  };

  const handleFormReset = () => {
    setForm({});
  };
  return (
    <div>
      <div>
        <form
          onChange={handleFormInputText}
          onSubmit={handleFormSubmit}
          onReset={handleFormReset}
          ref={ref}
        >
          <input type="text" placeholder="name" name="name" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input type="password" name="repeat" placeholder="Repeat password" />
          <button>Get info</button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default MultipleInputs;
