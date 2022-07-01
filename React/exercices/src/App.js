import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// const users = [
//   { id: 1, firstname: "Alexandre", lastname: "Zegrand" },
//   { id: 2, firstname: "Marie", lastname: "Rose" },
//   { id: 3, firstname: "India", lastname: "Loulou" },
// ];

const users = [
  { firstName: "Ada", lastName: "Lovelace" },
  { firstName: "Donald", lastName: "Knuth" },
];

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://triple-triad-game.herokuapp.com/api/v1/characters"
      );
      console.log(result.data);
      setCharacters(result.data.data);
    };
    fetchData();
  }, []);
  console.log("characters ==>", characters);
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gridTemplateRows: "repeat(3,1fr)",
          gap: "1rem",
        }}
      >
        {characters.map((char) => (
          <div key={char.id}>
            <div>
              <h1>{char.name}</h1>
              <h3>{char.humanName}</h3>
              <img
                src={char.thumbnail.path}
                alt=""
                style={{ width: "150px", height: "150px" }}
              />
              <p>{char.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
