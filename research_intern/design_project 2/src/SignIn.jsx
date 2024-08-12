// src/SignIn.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignIn () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault()

    // Dummy authentication logic
    if (email === 'user@example.com' && password === 'password123') {
      navigate('/dashboard')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn} className='sign-in-form'>
          <div className='input-group'>
            <label>Email:</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='input-group'>
            <label>Password:</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className='error'>{error}</div>}
          <button type='submit' className='unlock-button'>Sign In</button>
        </form>
      </header>
    </div>
  )
}

export default SignIn
