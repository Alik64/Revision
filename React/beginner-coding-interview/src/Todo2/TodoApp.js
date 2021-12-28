import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {

    const [text, setText] = useState("")
    const [tasks, setTasks] = useState([])

    const handleChange = e => {
        setText(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault()
        text && setTasks([{ text, fait: false, id: uuidv4() }, ...tasks])
        setText("")
    }

    const onClick = (id) => {

        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
                // tasks.splice(i, 1)
                tasks[i].fait = !tasks[i].fait
            }
        }
        setTasks([...tasks])

    }



    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>
            <ul>
                {tasks.filter(objet => objet.fait === false)
                    .map(({ text, id }) =>
                        <li onClick={() => onClick(id)} key={uuidv4()}>{text}</li>)}
            </ul>
            <h2>Taches effectué</h2>
            <ul>
                {tasks.filter(objet => objet.fait === true)
                    .map((task) =>
                        <li key={uuidv4()}>{task.text}</li>)}
            </ul>
        </>

    )
}
