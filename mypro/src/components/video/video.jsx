import React, { useRef } from 'react'
import './video.css'
import video from '../../assets/video-col.mp4'
const Video = ({playState,setplayState}) => {
    const player = useRef(null);
    const closePlayer = (e)=>{
if(e.target === player.current){
    setplayState(false);
}
    }
  return (
    <div className={`video-p ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Video