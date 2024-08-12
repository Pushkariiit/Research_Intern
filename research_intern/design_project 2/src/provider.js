
import * as React from 'react'
import {
  RainbowKitProvider,
  getDefaultWallets,
  midnightTheme
} from '@rainbow-me/rainbowkit'

import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import '@rainbow-me/rainbowkit/styles.css';



const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Paper Stack',
  projectId: 'db1b8a46ffa835bd9a48a89ff540f990',
  chains
})

const demoAppInfo = {
  appName: 'myApp'
}

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export function Providers ({ children }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        appInfo={demoAppInfo}
        theme={midnightTheme()}
        coolMode
        modalSize='compact'
      >
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}