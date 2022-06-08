import { createContext, useState } from 'react'

export const SpotifyContext = createContext()

export const SpotifyProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState({})
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(false)
  const [volume, setVolume] = useState(false)
  const [timestamp, setTimestamp] = useState()

  return (
    <SpotifyContext.Provider value={currentSong}>
      {children}
    </SpotifyContext.Provider>
  )
}
