import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Pwani E-learning</title>
          <link rel="icon" href="/logo.png" />
        </Head>

        {/* navabr */}
        <Navbar />
      </div>
    </>
  )
}
