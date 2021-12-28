import React, { useState } from 'react'

export default function Form() {
    const [value, setvalue] = useState("")

    return (
        <div>
            <input type="text" onChange={e => setValue(e.target.value)} />
        </div>
    )
}
