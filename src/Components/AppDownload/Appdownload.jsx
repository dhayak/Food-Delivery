import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'

const Appdownload = () => {
  return (
    <div>
      <div className="app-download" id='app-download'>
        <p>For Bette Experience <br/> Royal Food Court </p>
        <div className="app-download-platform">
            <img src={assets.play_store} alt="PlayStoreImage" />
            <img src={assets.app_store} alt="AppStoreImage" />
        </div>
      </div>
    </div>
  )
}

export default Appdownload
