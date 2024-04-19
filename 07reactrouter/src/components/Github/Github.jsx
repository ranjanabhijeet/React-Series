import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //  fetch('http://api.github.com/users/ranjanabhijeet')
    //  .then(response => response.json())
    //  .then(data  => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-black text-white p-4 text-3xl'>Github followers: {data.followers} 
    <img   src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch("http://api.github.com/users/ranjanabhijeet")
    return response.json()
}