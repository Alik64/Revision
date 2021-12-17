import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function RandomUser() {



    const [userInfo, setUserInfo] = useState([])

    const getRandomUser = () => {
        return axios
            .get('https://randomuser.me/api')
            .then(({ data }) => {
                console.log(data)
                return data
            })

            .catch(err => {

                console.log(err)
            })
    }



    const getUserName = (userInfo) => {
        const { name: { first, last } } = userInfo
        return `${first} ${last}`;
    }
    console.log(userInfo)

    useEffect(() => {
        getRandomUser().then(data => {
            setUserInfo(data.results)
        })
    }, [])


    return (
        <div>
            {
                userInfo.map((data, index) => (
                    <div key={index}>
                        <p>{getUserName(data)}</p>
                    </div>
                )
                )


            }


            <button onClick={() => getRandomUser()}>Click me</button>
        </div>
    )
}
