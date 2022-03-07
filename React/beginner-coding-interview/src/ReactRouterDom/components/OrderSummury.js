import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function OrderSummury() {
    const navigate = useNavigate()
    return (
        <>
            <div>Order confirmed!</div>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    )
}
