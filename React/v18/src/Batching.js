import React, { useState } from 'react'

export default function () {
    const [count, setCount] = useState(0)
    console.log('render batching')

    const clickHandler = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 2)
    }
    const clickHandlerAsync = () => {
        setTimeout(() => {
            setCount(prev => prev + 1)
            setCount(prev => prev + 2)
        }, 1000)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={clickHandler}>Click me</button>
            <button onClick={clickHandlerAsync}>Click me async</button>
        </div>
    )
}
