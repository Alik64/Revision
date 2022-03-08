import React from 'react'
import { NavLink, Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
    return (
        <div>
            <nav>
                <NavLink to='1'>User 1</NavLink>
                <NavLink to='2'>User 2</NavLink>
                <NavLink to='3'>User 3</NavLink>
            </nav>
            <Outlet />
            <button onClick={() => setSearchParams({ filter: 'active' })}>Active users</button>
            <button onClick={() => setSearchParams({})}>Reset Filter</button>

            {showActiveUsers ? <h2>Showing active users</h2> : <h2>Showing All users </h2>}
        </div>
    )
}


