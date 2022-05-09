import React, { useEffect, useReducer, useState } from 'react';

export default function Hooks() {


    const [counter, setCounter] = useState(0)
    const [effectCount, setEffectCount] = useState(0)
    const [timerOff, setTimerOff] = useState(false)
    const [state, dispatch] = useReducer(reducer, initState);
   
    const initState = {
        count: 0
    }
    
    function reducer(state, action) {
       
        switch (action.type) {
            case "PLUS":
                return { count: state.count + 1 }
            case "MINUS":
                return { count: state.count - 1 }
            default:
                throw new Error()
               
        }

        
    }

    useEffect(() => {
        let timer
        if (!timerOff) {
            timer = setTimeout(() => {
                setEffectCount(effectCount + 1)
                // document.title = `${effectCount} seconds`
            }, 1000);
        }

        return () => {
            clearInterval(timer)
        };
    }, [effectCount, timerOff]);





    return (
        <div style={{
            display: "grid",
            placeItems: "center"
        }}>
            <h2>useState count : {counter} </h2>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                <button style={{ width: "100px" }} onClick={() => setCounter(0)}>Reset</button>
                <button style={{ width: "100px" }} onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <br />
            <h2>useReducer count: {state.count}</h2>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                <button style={{ width: "100px" }} onClick={() => dispatch({ type: "MINUS" })}>-</button>
                <button style={{ width: "100px" }} onClick={() => dispatch({ type: "PLUS" })}>+</button>
            </div>
            <br />
            <h2>useEffect count : {effectCount} </h2>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                <button style={{ width: "100px" }} onClick={() => setEffectCount(0)}>Reset</button>
                <button style={{ width: "100px" }} onClick={() => setTimerOff(false)}>Start</button>
                <button style={{ width: "100px" }} onClick={() => setTimerOff(true)}>Stop</button>
            </div>

        </div>)
}

// useReducer
