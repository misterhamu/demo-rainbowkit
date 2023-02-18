import styles from '@/styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Head from 'next/head'
import { toast } from 'react-toastify'
import { useAccount } from 'wagmi'

export default function Home() {

  const account = useAccount({
    onConnect() {
     toast(`Connected!`)
    },
    onDisconnect() {
      toast(`Disconnected`)
    },
  })

  return (
    <>
      <Head>
        <title>RainbowKit Demo</title>
        <meta name="description" content="RainbowKit Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={styles.title}>
            Hello RainbowKit
          </h1>
          <ConnectButton />
        </div>
      </main>
    </>
  )
}
