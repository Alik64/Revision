import React from 'react'

export default function List({ items }) {
    return (
        <ul>
            {items.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>

    )
}
