import React, { useEffect, useState } from "react";

import "./App.css";
import ContainerComponent from "./SOF/ContainerComponent";
import ClickMe from "./_CG/ClickMe";

import ListUsers from "./_CG/ListUsers";
import PreviewClock from "./_CG/PreviewClock";
import QuelHook from "./_CG/QuelHook";
import UserContextComp from "./_CG/UserContextComp";
import Welcome from "./_CG/Welcome";

// const users = [
//   { id: 1, firstname: "Alexandre", lastname: "Zegrand" },
//   { id: 2, firstname: "Marie", lastname: "Rose" },
//   { id: 3, firstname: "India", lastname: "Loulou" },
// ];

// const users = [
//   { firstName: "Ada", lastName: "Lovelace" },
//   { firstName: "Donald", lastName: "Knuth" },
// ];

function App() {
  // const [characters, setCharacters] = useState([]);
  // console.table(characters);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get(
  //       "https://triple-triad-game.herokuapp.com/api/v1/characters"
  //       // "http://localhost:5001/api/v1/characters"
  //     );
  //     console.log(result.data);
  //     setCharacters(result.data.data);
  //   };
  //   fetchData();
  // }, []);
  // console.log("characters ==>", characters);
  // return (
  //   <>
  //     <div
  //       style={{
  //         display: "grid",
  //         gridTemplateColumns: "repeat(3,1fr)",
  //         gridTemplateRows: "repeat(3,1fr)",
  //         gap: "1rem",
  //       }}
  //     >
  //       {characters.map((char) => (
  //         <div key={char.id}>
  //           <div>
  //             {char.isLike ? "♥" : "♡"}
  //             <h1>{char.name}</h1>
  //             <h3>{char.humanName}</h3>
  //             <img
  //               src={char.thumbnail.path}
  //               alt=""
  //               style={{ width: "150px", height: "150px" }}
  //             />
  //             <p>{char.description}</p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </>
  // );
  // return <FocusableInput shouldFocus={true} />;

  // const users = [
  //   { firstName: "Ada", lastName: "Lovelace" },
  //   { firstName: "Donald", lastName: "Knuth" },
  // ];
  return (
    <>
      {/* <Welcome primary /> */}
      {/* <ClickMe value={1} /> */}
      {/* <UserContextComp /> */}
      <PreviewClock />
    </>
  );
}
export default App;
