import React, { useState, useEffect } from "react";
import "./Featured.scss";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import { InfoOutlined } from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router-dom";

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      const userObject = JSON.parse(localStorage.getItem("user"));
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_PROXY}/api/movies/random?type=${type}`,
          {
            headers: {
              token: "Bearer " + userObject.accessToken,
            },
          }
        );
        setContent((content) => {
          return (content = res.data[0]);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Historical">Historical</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
            <option value="Animation">Animation</option>
            <option value="Drama">Drama</option>
            <option value="Documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" width="100%" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <Link to="/watch" state={content} className="link">
            <button className="play">
              <PlayCircleFilledWhiteOutlinedIcon />
              <span> Play </span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span> Info </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
