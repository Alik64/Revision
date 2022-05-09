import React, { useRef, useState } from "react";

const MultipleInputs = () => {
  const ref = useRef(null);
  const [form, setForm] = useState({
    name: " ",
    email: "",
    password: "",
    repeat: "",
  });
  const handleClick = () => {
    setForm({
      name: "Paul",
      email: "paul@gmail.com",
      password: "123",
      repeat: "123",
    });
  };
  const handleChange = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({
      name: " ",
      email: "",
      password: "",
      repeat: "",
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Fill fields</button>
      <div>
        <form onSubmit={handleFormSubmit} ref={ref}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Repeat password"
            name="repeat"
            value={form.repeat}
            onChange={handleChange}
          />
          <button>Get info</button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default MultipleInputs;
