import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

function Profile() {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.handleLogout()
    navigate('/')
  }

  return (
    <div>
      <h1>Profile</h1>
      <h2>Welcome: {auth.user}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
