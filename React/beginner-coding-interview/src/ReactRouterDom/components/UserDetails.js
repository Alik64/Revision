import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const { userId } = useParams()


    return (
        <div>Detail about user {userId}</div>
    )
}
