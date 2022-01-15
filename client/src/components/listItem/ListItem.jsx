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
      const userObject = JSON.parse(localStorage.getItem("user"));
      try {
        const res = await axios.get(
          `http://localhost:8800/api/movies/find/${item}`,
          {
            headers: {
              token: "Bearer " + userObject.accessToken,
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
                  <span className="limit">{movie.limit}+</span>
                  <span>{movie.year}</span>
                </div>
                <div className="desc">{movie.desc.substring(0,135)}...</div>
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
