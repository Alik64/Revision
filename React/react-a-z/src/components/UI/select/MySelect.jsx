import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function MySelect({ options, defaultValue, value, onChange }) {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={uuidv4()} value={option.value}> {option.name}</option>
            )}
        </select>
    )
}
