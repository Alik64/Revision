import React, { useState } from "react";

const ContainerComponent = () => {
  const [total, setTotal] = useState(0);
  const updateFunction = () => {
    setTotal((prev) => prev + 1);
  };

  return (
    <>
      {total}
      <EntryComponent updateFunction={updateFunction} />
    </>
  );
};

const EntryComponent = ({ updateFunction }) => {
  const services = ["one", "two", "three"];
  return (
    <>
      {services.map((item) => (
        <ServiceComponent updateFunction={updateFunction} />
      ))}
    </>
  );
};

const ServiceComponent = ({ updateFunction }) => {
  return <input type="checkbox" onChange={updateFunction}></input>;
};

export default ContainerComponent;
