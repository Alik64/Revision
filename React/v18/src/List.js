import { useDeferredValue } from 'react'

export default function List({ items }) {

    const def = useDeferredValue()
    return (
        <ul>
            {def.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>

    )
}
