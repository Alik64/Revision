import React from "react";
// const users = [
//   { firstName: "Ada", lastName: "Lovelace" },
//   { firstName: "Donald", lastName: "Knuth" },
// ];
const ListUsers = ({ users }) => {
  // const copyUsers = [...users];
  return (
    <>
      <div className="user-count"> Users: {users.length}</div>
      <ul className="user-list">
        {users
          .sort((a, b) => (a.lastName < b.lastName ? -1 : 1))
          .map((user) => {
            return (
              <li>
                {user.firstName} {user.lastName}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ListUsers;
