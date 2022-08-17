import React from "react";

// function Welcome({ user, primary, children }) {
//   const el = `h${primary ? 1 : 2}`;

//   return React.createElement(
//     el,
//     {
//       user,
//       primary,
//     },
//     `Welcome${user ? user : ""}!`
//   );
// }

function Welcome({ primary, user }) {
  const CustomTag = `h${primary ? 1 : 2}`;

  return <CustomTag>Welcome{user ? ` ${user}` : ""}!</CustomTag>;
}
export default Welcome;

{
  /* <Welcome primary user={john}!/> Welcome John! */
}
