import React from "react";
import "./Watch.scss";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const movie = location.state;

  return (
    <div className="watch">
      <Link to="/" className="back">
        <ArrowBackIosOutlinedIcon className="icon" />
        Home
      </Link>
      <video
        className="video"
        src={movie.trailer}
        autoPlay
        progress="true"
        controls
      ></video>
    </div>
  );
};

export default Watch;
