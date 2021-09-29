import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Pwani E-learning</title>
          <link rel="icon" href="/logo.png" />
        </Head>
      </div>

      <Navbar />
    </>
  )
}
