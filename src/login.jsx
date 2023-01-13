import React from 'react'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

function login() {
  const [user, setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'

  const handleLogin = () => {
   auth.login(user)
   navigate(redirectPath, {replace: true})
  }

  return (
    <div>
      <h1>login</h1>
      <label htmlFor="">
        username: <input type="text" name="" onChange={e => setUser(e.target.value)} />
        <button onClick={handleLogin}> Login</button>
      </label>
    </div>
  )
}

export default login 
