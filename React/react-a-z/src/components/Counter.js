import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState("")

    const increment = () => {
        setCount(prev => prev + 1)
    }
    const decrement = () => {
        setCount(prev => prev - 1)
    }
    const inputHandler = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            <h1>{count}</h1>
            <h2>{value}</h2>
            <input type='text' onChange={inputHandler} />
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}
