import React, { createContext } from "react";

const UserContext = createContext({ id: 1, email: "abc@defg.com" });

const UserContextComp = () => {
  return (
    <UserContext.Provider value={{ id: 1, email: "xy@mail.com" }}>
      <A />
    </UserContext.Provider>
  );
};

export default UserContextComp;

const A = () => {
  return (
    <UserContext.Consumer>
      {(user) => <div>{user.email}</div>}
    </UserContext.Consumer>
  );
};

// {(user) => <div>{user.email}</div>} => xy@mail.com
