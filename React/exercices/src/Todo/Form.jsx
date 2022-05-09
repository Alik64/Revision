import React, { useState } from 'react'


const useInputValue = initialValue => {


    const [value, setValue] = useState(initialValue)


    return {
        value,
        onChange: (e) => setValue(e.target.value),
        resetValue: () => setValue('')
    }
}

export default function Form({ onSubmit }) {
    const { resetValue, ...text } = useInputValue("")



    return (
        <form onSubmit={e => {
            e.preventDefault()
            onSubmit(text.value);
            resetValue()
        }}>
            <div>
                <input {...text} /> <button>Add</button>
            </div>

        </form>
    )
}
