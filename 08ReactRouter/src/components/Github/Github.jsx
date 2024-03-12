import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
  // const data = useLoaderData()
  //SIMPLE FETCHING
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/harpreet2004')
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setData(data)
        })
    },[])

  return (
    <div className=' flex flex-col justify-center items-center gap-8 text-center bg-gray-400 p-4 text-3xl'>
      <h1>Github Followers : {data.followers} </h1>
      <img src= {data.avatar_url} width={250} className='rounded-2xl'></img>
    </div>
  )
}

export default Github;

// ASYNC AND AWAIT FETCHING
export const githubInfoLoader = async () => {
  const response = await fetch ("https://api.github.com/users/harpreet2004");
  return response.json();
}