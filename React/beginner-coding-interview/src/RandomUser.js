import React, { useState, useEffect } from 'react'
import axios from 'axios'

const getUserName = (userInfo) => {
    const { name: { first, last } } = userInfo
    return `${first} ${last}`;
}
const getUserPhoto = (userInfo) => {
    const { picture: { thumbnail } } = userInfo
    return `${thumbnail}`
}
const getRandomUser = (pageNumber) => {
    //?page=2
    return axios
        .get(`https://randomuser.me/api?page=${pageNumber}`)
        .then(({ data }) => {
            return data
        })

        .catch(err => {

            return err
        })
}


export default function RandomUser() {



    const [userInfo, setUserInfo] = useState([])
    const [nextPageNumber, setNextPageNumber] = useState(1)
    const addUser = () => {
        getRandomUser(nextPageNumber).then((data) => {
            if (data === undefined) return
            const newResults = [
                ...userInfo,
                ...data.results
            ]

            setUserInfo(newResults)
            setNextPageNumber(data.info.page + 1)
            console.log("userInfo", userInfo)
        })
    }



    useEffect(() => {
        addUser()
    }, [])



    return (
        <div>
            <button onClick={() => addUser()}>Add user</button>
            {
                userInfo.map((data, index) => (
                    <div key={index}>
                        <img src={getUserPhoto(data)} alt="" />
                        <p>{getUserName(data)}</p>
                        <p>{userInfo.info}</p>
                    </div>
                )
                )


            }




        </div>
    )
}
