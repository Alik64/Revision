import React from "react";
// const users = [
//   { firstName: "Ada", lastName: "Lovelace" },
//   { firstName: "Donald", lastName: "Knuth" },
// ];
const ListUsers = ({ users }) => {
  return (
    <>
      <div className="user-count"> Users: {!!users ? users.length : 0}</div>
      {users && (
        <ul className="user-list">
          {users
            .sort((a, b) =>
              a.lastName.toLowerCase() < b.lastName.toLowerCase() ? -1 : 1
            )
            .map((user) => {
              return (
                <li key={user.lastName} style={{ color: "white" }}>
                  {user.firstName} {user.lastName}
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
};

export default ListUsers;
