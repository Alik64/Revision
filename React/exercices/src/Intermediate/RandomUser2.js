import { useEffect, useState } from "react";
import axios from 'axios'
import './RandomUser2.css'

//https://randomuser.me/api/?results=20



export default function RandomUser2() {
    const [users, setUsers] = useState([]);
    const [flatenedLocation, setFlatenedLocation] = useState([]);


    const flatLocation = (locations) => {

        const location = locations[0]
        console.log(location)
        const locationsHeader = []
        // Object.keys(location).forEach(locationKey => {
        //     const value = location[locationKey]
        //     if (typeof value !== 'object') {
        //         locationsHeader.push(locationKey)
        //     }
        // })



    }
    const fetchData = async () => {

        try {
            const result = await axios.get('https://randomuser.me/api/?results=20')
            setUsers(result.data.results)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
        setFlatenedLocation(
            flatLocation(users.map(user => user.location))
        )

    }, []);


    return (
        <div className="userGrid">


            {users.map((user, useridx) => {
                <div key={useridx}>{flatLocation}</div>
            })}

        </div >);
}
{/* {users.map(user => (
                <div key={user.cell} className="user_card">
                    <img src={user.picture.large} alt="" />
                    <h2>
                        {user.name.first}
                        {user.name.last}</h2>
                </div>
            ))} */}