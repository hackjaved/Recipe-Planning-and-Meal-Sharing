import React from 'react'
import {useAuth} from './auth'

const Profile = () => {
    const auth=useAuth()
    const handlelogout=()=>{
        auth.logout()
    }
  return (
    <div>
        <h1>Welcome User</h1><br></br>
        <button onClick={handlelogout}>Logout</button>
      
    </div>
  )
}

export default Profile