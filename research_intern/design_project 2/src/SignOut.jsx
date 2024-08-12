import React from 'react'
import { useNavigate } from 'react-router-dom'
import { disconnect } from '@wagmi/core'

function SignOut () {
  const navigate = useNavigate()

  const handleSignOut = () => {
    disconnect()
    navigate('/')
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Sign Out</h1>
        <button onClick={handleSignOut} className='unlock-button'>
          Sign Out
        </button>
      </header>
    </div>
  )
}

export default SignOut

