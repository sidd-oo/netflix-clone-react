import React from 'react'
import './Watch.scss'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { useLocation } from 'react-router-dom'; 

const Watch = () => {
    const location = useLocation();
    console.log(location);
    const movie = location.state;
    console.log(movie);
    return (
        <div className = "watch">
            <div className="back">
                <ArrowBackIosOutlinedIcon className = "icon"/>
                Home
            </div> 
            <video 
                className = "video"
                src= {movie.trailer}
                autoPlay 
                progress ="true"
                controls
            ></video>
        </div>
    )
}

export default Watch