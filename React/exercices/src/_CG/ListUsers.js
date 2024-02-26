import React from "react";
// const users = [
//   { firstName: "Ada", lastName: "Lovelace" },
//   { firstName: "Donald", lastName: "Knuth" },
// ];
const ListUsers = ({ users }) => {
  console.log("users : ", users);
  return (
    <>
      <div className="user-count">
        Users: {typeof users !== "undefined" ? users.length : 0}
      </div>
      {typeof users !== "undefined" && users.length > 0 && (
        <ul className="user-list">
          {users
            .sort((a, b) =>
              a.lastName.toLowerCase() < b.lastName.toLowerCase() ? -1 : 1
            )
            .map((user) =>  (
                <li key={user.lastName} style={{ color: "white" }}>
                  {user.firstName} {user.lastName}
                </li>
              );
            )}
        </ul>
      )}
    </>
  );
};

export default ListUsers;
