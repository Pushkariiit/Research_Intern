import React, { useState } from 'react'
import './App.css'
import { abi, contract_address } from './contract/data'
import { publicClient } from './contract/viem_utils'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

function Main () {
  const [isLocked, setIsLocked] = useState(false)
  const [alert, setAlert] = useState(false)

  const { address, isConnected } = useAccount()

  const delay = delayInms => {
    return new Promise(resolve => setTimeout(resolve, delayInms))
  }

  const handleUnlockButtonClick = async () => {
    setIsLocked(true)
    if (await checkSbtOwnership(address)) {
      await fetch('http://192.168.20.125/unlock')
      console.log('Owns SBT')
    } else {
      console.log('Doesn’t own SBT')
      setAlert(true)
    }
    await delay(5000)
    setIsLocked(false)
    return
  }

  const checkSbtOwnership = async address => {
    const balance = await publicClient.readContract({
      address: contract_address,
      abi: abi,
      functionName: 'balanceOf',
      args: [address]
    })
    if (balance > 0) {
      return true
    }
    return false
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Servo Control Dashboard</h1>
        <div className='content'>
          {isConnected ? (
            <button
              onClick={handleUnlockButtonClick}
              className={`unlock-button ${isLocked ? 'locked' : ''}`}
              disabled={isLocked}
            >
              {isLocked ? 'Unlocking...' : 'Unlock'}
            </button>
          ) : (
            <p>Please connect your wallet to proceed.</p>
          )}
          {alert && <div className='alert'>You don’t own the SBT-Key</div>}
          <ConnectButton className='connect-button' />
        </div>
      </header>
    </div>
  )
}

export default Main
