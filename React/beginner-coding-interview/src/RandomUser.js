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
            }).then(data => {
                setUserInfo(data.results)
                console.log(userInfo)
            })

            .catch(err => {

                console.log(err)
            })
    }



    const getUserName = (userInfo) => {
        const { name: { first, last } } = userInfo
        return `${first} ${last}`;
    }
    const getUserPhoto = (userInfo) => {
        const { picture: { large } } = userInfo
        return `${large}`
    }
    console.log(userInfo)




    return (
        <div>
            {
                userInfo.map((data, index) => (
                    <div key={index}>
                        <img src={getUserPhoto(data)} alt="" />
                        <p>{getUserName(data)}</p>
                    </div>
                )
                )


            }


            <button onClick={() => getRandomUser()}>Click me</button>
        </div>
    )
}
