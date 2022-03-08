import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../components/auth'

export const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()


    const handleLogin = () => {
        auth.login(user)
        navigate('/')
    }
    return (
        <>
            <h2>Login</h2>
            <label>
                Username: <input type='text' onChange={e => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}
