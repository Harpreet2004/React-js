import React from 'react'
import UserContext from './UserContext'

const UserContextProvider  = ({children}) => {
    //CHILDREN REFERS TO ALL THE COMPONENTS
    //THAT WANTS TO ACCESS THIS DATA
    //THUS A GENERIC TERM WAS GIVEN -> CHILDREN :)

  const [user,setUser] = React.useState("Lucky")
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
