import { createContext, useState } from 'react'

export const SpotifyContext = createContext()

export const SpotifyProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState({})
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(false)
  const [volume, setVolume] = useState(false)
  const [timestamp, setTimestamp] = useState()

  const pause = () => {
    setIsPaused(true)
    document.querySelector('#audio-element').pause()
  }

  const play = () => {
    document.querySelector('#audio-element').play()
    setIsPaused(false)
  }

  const playOnSelect = (song) => {
    try {
      document.querySelector('#audio-element').src = song.music_url
      document.querySelector('#audio-element').play()
      setCurrentSong(song)
      setIsPlaying(true)
      setIsPaused(false)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <SpotifyContext.Provider value={{ currentSong, playOnSelect }}>
      {children}
    </SpotifyContext.Provider>
  )
}
