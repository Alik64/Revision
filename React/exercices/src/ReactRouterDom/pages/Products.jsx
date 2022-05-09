import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function Products() {
    return (
        <>
            <input type="search" placeholder='Search items' />
            <nav>

                <NavLink to='featured'>Featured</NavLink>
                <NavLink to='new'>New</NavLink>
            </nav>
            <Outlet />
        </>
    )
}
