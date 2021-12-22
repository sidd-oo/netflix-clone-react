import React, { useState, useEffect } from "react";
import "./Featured.scss";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import { InfoOutlined } from "@mui/icons-material";
import axios from "axios";

const Featured = ({ type }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(
          `http://172.18.250.193:8800/api/movies/random?type=${type}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzJmYjU4YjhhZTBjZDJjNjE4Yzc0OCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDAxNjg1NDUsImV4cCI6MTY0MDYwMDU0NX0.LfHGvOB_tLad_UGPoYci1foklfvHkHMNHM2TT-K140s",
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
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" width="100%" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
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
  );
};

export default Featured;
