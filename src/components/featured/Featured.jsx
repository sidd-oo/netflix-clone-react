import React from 'react'
import './Featured.scss'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import { InfoOutlined } from '@mui/icons-material';

const Featured = () => {
    return (
        <div class = "featured">
           <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                width= "100%"
            /> 
            <div className="info">
                <img
                    src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                    alt=""
                />
                <span className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit cupiditate quae ipsam tempore intle aliquam inventore ducimus mollitia quasi, enim voluptatem natus, nequet aperiam bonpae consectetur excepturi rerum ullam vitae eaque vague nimessel.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayCircleFilledWhiteOutlinedIcon />
                        <span> Play </span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span> Info </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
