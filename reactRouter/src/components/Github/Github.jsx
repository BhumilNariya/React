import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data=useLoaderData()
    // const [data, setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/BhumilNariya')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])


    return (
        <div className='bg-gray-500 text-white text-3xl p-4 m-4 '>Github Repos:{data.public_repos}
            <img   src={data.avatar_url} alt="Gitub Img" width={300} height={300} />
            <h1>Location:{data.location}</h1>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/BhumilNariya')
    return response.json()
}
