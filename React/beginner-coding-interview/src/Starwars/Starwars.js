import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Personage from './Personage';
import './Personage.css'
export default function Starwars() {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const result = await axios.get('https://swapi.dev/api/people/')
        setUsers(result.data.results)
    }

    useEffect(() => {
        getUsers()

    }, []);

    return (
        <div className='personage_grid'>
            {users.map((user, index) =>
                <div
                    key={index}>
                    <Personage
                        name={user.name}
                        hair_color={user.hair_color}
                        gender={user.gender}
                    />
                </div>)}
        </div>);
}
