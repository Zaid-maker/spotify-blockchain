import Nav from '../components/nav'
import Activity from '../components/activity'
import Head from 'next/head'

const HomePage = () => {
  return (
    <div className='flex'>
      <Head>
        <title>Spotify Blockchain - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Nav />
      <div className='w-full'>{/* Start coding here */}</div>
      <Activity />
    </div>
  )
}

export default HomePage
