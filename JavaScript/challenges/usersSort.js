const users = [
  { id: 1, firstname: "Alexandre", lastname: "Zegrand" },
  { id: 2, firstname: "Marie", lastname: "Rose" },
  { id: 3, firstname: "India", lastname: "Loulou" },
];

let usersSort = users.sort((a, b) => (a.lastname < b.lastname ? -1 : 1));
console.log(usersSort);

import React from "react";

const usersSorts = ({ data }) => {
  const copyData = [...data];
  return (
    <div>
      {copyData
        .sort((a, b) => (a.lastname < b.lastname ? -1 : 1))
        .map((user) => (
          <div key={user.id}>
            {user.firstname} {user.lastname}
          </div>
        ))}
    </div>
  );
};

export default usersSorts;
