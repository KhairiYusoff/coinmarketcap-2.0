import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl='https://nwztobdvaqqx.usemoralis.com:2053/server'
      appId='rTMSzmxrq4jOftgGb4MvbV5EbNSG15I32BdAydC0'>
      <Component {...pageProps} />
    </MoralisProvider>

  )


}

export default MyApp
