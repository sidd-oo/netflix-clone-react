import React from 'react'
import './Watch.scss'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

const Watch = () => {
    return (
        <div className = "watch">
            <div className="back">
                <ArrowBackIosOutlinedIcon className = "icon"/>
                Home
            </div> 
            <video 
                className = "video"
                src="https://www.pexels.com/video/teenage-girl-carrying-a-basket-of-lavender-5126324/"
                autoPlay 
                progress
                controls
            ></video>
        </div>
    )
}

export default Watch
