
import React, { useState } from 'react'

export default function Counter(props) {
    const [count, setCount] = useState(0)


    const onIncrement = () => {
        setCount(prevCount => prevCount + 1)

    }
    const onDecrement = () => {
        setCount(prevCount => prevCount - 1)

    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => onIncrement()}>+</button>
            <button
                onClick={() => onDecrement()}
                disabled={count === 0} >-</button>
        </div >
    )
}
