import { useContext } from 'react'
import { SpotifyContext } from '../context/context'
import Image from 'next/image'
import next from '../assets/next.svg'
import previous from '../assets/previous.svg'
import speaker from '../assets/speaker.svg'
import repeat from '../assets/repeat.svg'
import shuffle from '../assets/shuffle.svg'
import playRounded from '../assets/playRounded.svg'
import pauseIcon from '../assets/pause.svg'

const styles = {
  albumCoverContainer: `w-20 h-20 mr-3`,
  coverPhoto: `object-cover`,
  mainControl: `fixed bottom-0 left-0 p-5 py-3 pr-10 w-screen bg-[#242424] z-40 flex items-center justify-between`,
  // range: `appearance-none mx-3 hover:bg-[#000] h-1 hover:bg-[#22C55E] bg-[#fff] w-[500px]`,
  // volumeRange: `mx-3 -hue-rotate-90 h-1`,
  flexCenter: `flex items-center`,
  controlIcon: `mr-5 cursor-pointer hover:opacity-100 opacity-50`,
  playIcon: `mr-5 w-10 h-10 cursor-pointer hover:opacity-50`,
  pauseIconStyle: `mt-3 w-10 h-10 cursor-pointer hover:opacity-50`,
  controlIconsContainer: `flex items-center justify-center mb-2`,
}

const PlayerControls = ({ songs }) => {
  const { currentSong } = useContext(SpotifyContext)

  return (
    <div className={styles.mainControl}>
      <div className={styles.flexCenter}>
        <div className={styles.albumCoverContainer}>
          <Image
            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
            className={styles.coverPhoto}
            width={200}
            height={200}
            alt="album cover"
          />
        </div>
        <div>
          <p>{currentSong}</p>
          <p className="opacity-50">{'artist'}</p>
        </div>
      </div>
      <div>
        <div className={styles.controlIconsContainer}>
          <div className={styles.controlIcon}>
            <Image src={shuffle} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerControls
