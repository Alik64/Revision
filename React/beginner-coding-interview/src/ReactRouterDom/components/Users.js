import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export const Users = () => {
    return (
        <div>
            <nav>
                <NavLink to='1'>User 1</NavLink>
                <NavLink to='2'>User 2</NavLink>
                <NavLink to='3'>User 3</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}


