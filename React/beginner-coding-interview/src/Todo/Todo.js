import React, { useState } from 'react'
import Form from './Form'

function Todo(props) {

    const [todos, setTodos] = useState([])
    const toggleComplete = index => {
        setTodos(todos.map((todo, curent) =>
            curent === index
                ? {
                    ...todo,
                    complete: !todo.complete
                }
                : todo
        ))
    }
    console.log(todos)
    return (
        <div>
            <Form onSubmit={text => setTodos([{ text, complete: false }, ...todos])} />
            <div>{todos.map(({ text, complete }, index) =>
                <div key={text} style={{
                    textDecoration: complete ? "line-through" : ""
                }}>{text}
                    <button onClick={() => toggleComplete(index)} >-</button> </div>)}</div>
        </div>
    )
}

export default Todo
