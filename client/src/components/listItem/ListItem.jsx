import React, { useState, useEffect } from "react";
import "./ListItem.scss";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          `http://172.18.250.193:8800/api/movies/find/${item}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzJmYjU4YjhhZTBjZDJjNjE4Yzc0OCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDAxNjg1NDUsImV4cCI6MTY0MDYwMDU0NX0.LfHGvOB_tLad_UGPoYci1foklfvHkHMNHM2TT-K140s",
            },
          }
        );
        setMovie((movie) => {
          return (movie = res.data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <>
      <Link to={"/watch"} state={movie}>
        <div
          className="listItem"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ left: isHovered && index * 225 + index * 2.5 }}
        >
          <img src={movie.img} alt="" />

          {isHovered && (
            <>
              <video src={movie.trailer} autoPlay={true} loop />
              <div className="itemInfo">
                <div className="icons">
                  <PlayArrowRoundedIcon className="icon" />
                  <AddRoundedIcon className="icon" />
                  <ThumbUpAltRoundedIcon className="icon" />
                  <ThumbDownRoundedIcon className="icon" />
                </div>
                <div className="itemInfoTop">
                  <span>{movie.duration}</span>
                  <span className="limit">{movie.limit}</span>
                  <span>{movie.year}</span>
                </div>
                <div className="desc">{movie.desc}</div>
                <div className="genre">{movie.genre}</div>
              </div>
            </>
          )}
        </div>
      </Link>
    </>
  );
};

export default ListItem;
