import React, { useReducer, useState } from 'react';

export default function Hooks() {
    const [counter, setCounter] = useState(0)
    const [state, dispatch] = useReducer(first, second, third);
    return (
        <div style={{
            display: "grid",
            placeItems: "center"
        }}>
            <h2>Vous avez cliqué {counter} fois</h2>

            <button onClick={() => setCounter(counter + 1)}>CLiquez ici</button>
        </div>)
}
