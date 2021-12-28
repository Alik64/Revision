import React, { useState } from 'react'

function Todo(props) {

    const [count, setCount] = useState(0)
    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    )
}

export default Todo
