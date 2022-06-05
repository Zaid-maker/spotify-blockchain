import { useState, useEffect } from 'react'
import Nav from '../components/nav'
import Activity from '../components/activity'
import Playlist from '../components/playlist'
import Header from '../components/Header'
import PlayerControls from '../components/PlayerControls'
import UploadModal from '../components/UploadModal'
import Head from 'next/head'

const HomePage = () => {
  const [showUploadMusic, setShowUploadMusic] = useState(false)
  const [title, setTitle] = useState('')
  const [musicUrl, setMusicUrl] = useState('')
  const [songs, setSongs] = useState([])

  useEffect(() => {
    //getSongs().then((songs) => {
    //  setSongs(songs)
    //})
  }, [])

  return (
    <div className="flex">
      <Head>
        <title>Spotify Blockchain - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="w-full">
        <Header setShowUploadMusic={setShowUploadMusic} />
        <Playlist songs={songs} />
        <PlayerControls songs={songs} />
        {showUploadMusic && <UploadModal />}
      </div>
      <Activity />
    </div>
  )
}

export default HomePage
