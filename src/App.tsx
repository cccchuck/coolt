import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'

function App() {
  // const backButton = useBackButton()
  // const mainButton = useMainButton()
  // const initData = useInitData()
  // const initDataRaw = useInitDataRaw()

  // useEffect(() => {
  //   console.log(initData, initDataRaw)
  // }, [])

  return (
    <>
      <h1>Bit Whale</h1>
      <TonConnectButton />
    </>
  )
}

export default App
