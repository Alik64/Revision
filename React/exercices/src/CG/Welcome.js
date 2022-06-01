import React from "react";

// function Welcome({ user, primary, children }) {
//   const el = `h${primary ? 1 : 2}`;

//   return React.createElement(
//     el,
//     {
//       user,
//       primary,
//     },
//     `Welcome ${user ? user : ""}!`
//   );
// }

function Welcome({ primary, user }) {
  return <>{primary ? <h1>Welcome {user}!</h1> : <h2>Welcome {user}!</h2>}</>;
}
export default Welcome;
