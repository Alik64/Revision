import React, { useState } from 'react'
import { questions } from './questions'

export default function Quiz() {

    const [count, setCount] = useState(0)



    const chekerHandler = (e, bool) => {
        console.log(e.target)
        if (bool) {

            setCount(count + 1)
            e.target.style.color = "green"
            // setRight("green")
        } else {
            setCount(count - 1)
            e.target.style.color = "red"
        }
    }


    return (
        <div>
            <h1>React Quiz</h1><h2>Your score: {count}</h2>
            <div>
                {questions.map(question => (
                    <div key={question.id}>
                        <h2>{question.question}</h2>

                        <ul>
                            {question.answer.map(answer => (
                                <li

                                    onClick={(e) => chekerHandler(e, answer.right)}
                                    key={answer.id}>{answer.text}</li>))}
                        </ul>
                    </div>
                ))}

            </div>
        </div>
    )
}



