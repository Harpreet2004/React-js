import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams();
  return (
    <div className='text-center p-4 bg-orange-300 '>
      <h1 className='text-3xl text-black'>User : {userid} </h1>
    </div>
  )
}

export default User
