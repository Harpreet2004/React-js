import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

  const {user} = useContext(UserContext)

  if(!user) return <div>Please Login Ji!</div>

  return <div>Welcome {user} Ji</div>
}

export default Profile
