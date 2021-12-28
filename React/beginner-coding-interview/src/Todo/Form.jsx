import React, { useState } from 'react'


const useInputValue = initialValue => {
    const [value, setValue] = useState(initialValue)

    return {
        value,
        onChange: (e) => setValue(e.target.value)
    }
}

export default function Form() {
    const text = useInputValue("hello")



    return (
        <div>
            <input {...text} />
        </div>
    )
}
