import React, { useReducer, useState } from 'react';

export default function Hooks() {
    const [counter, setCounter] = useState(0)
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <div style={{
            display: "grid",
            placeItems: "center"
        }}>
            <h2>Vous avez cliqué {counter} fois</h2>
            <button onClick={() => setCounter(counter + 1)}>CLiquez ici</button>

            <h2>useReducer count: {state.count}</h2>
            <button onClick={() => dispatch({ type: "PLUS" })}>+</button>
            <button onClick={() => dispatch({ type: "MINUS" })}>-</button>
        </div>)
}

// useReducer
const initState = {
    count: 0
}

function reducer(state, action) {
    switch (action.type) {
        case "PLUS":
            return { count: state.count + 1 }
        case "MINUS":
            return { count: state.count - 1 }
    }
}