import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SDKProvider } from '@tma.js/sdk-react'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

console.log(`${import.meta.env.VITE_HOST_URL}/tonconnect-manifest.json`)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SDKProvider acceptCustomStyles debug>
    <TonConnectUIProvider
      manifestUrl={`${import.meta.env.VITE_HOST_URL}/tonconnect-manifest.json`}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TonConnectUIProvider>
  </SDKProvider>
)
