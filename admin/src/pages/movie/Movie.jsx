import React, { useContext, useState } from "react";
import "./Movie.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Publish } from "@mui/icons-material";
import { updateMovie } from "../../context/moviesContext/apiCalls";
import { MovieContext } from "../../context/moviesContext/MoviesContext";

const Movie = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state.movie;
  console.log(movie);
  const { dispatch } = useContext(MovieContext);

  const {title, desc, year, genre, limit, duration, isSeries} = movie;
  
  const [titleUpdated, setTitleUpdated] = useState(title);
  const [descUpdated, setDescUpdated] = useState(desc);
  const [yearUpdated, setYearUpdated] = useState(year);
  const [genreUpdated, setGenreUpdated] = useState(genre);
  const [limitUpdated, setLimitUpdated] = useState(limit);
  const [durationUpdated, setDurationUpdated] = useState(duration);
  const [isSeriesUpdated, setIsSeriesUpdated] = useState(isSeries);
  
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedState = {title: titleUpdated, desc: descUpdated, year: yearUpdated, genre: genreUpdated, limit: limitUpdated, duration: durationUpdated, isSeries: isSeriesUpdated};
    const movieId = movie._id;
    updateMovie({movieId, ...updatedState}, dispatch);
    navigate("/movies");
  }

  return (
    <div className="movie">
      <div className="movieTitleContainer">
        <h1 className="movieTitle">Movie</h1>
        <Link to="/newMovie">
          <button className="movieAddButton">Create</button>
        </Link>
      </div>
      <div className="movieTop">
        <div className="movieTopRight">
          <div className="movieInfoTop">
            <img
              src={movie.img}
              alt=""
              className="movieInfoImg"
            />
            <span className="movieName">{movie.title}</span>
          </div>
          <div className="movieInfoBottom">
            <div className="movieInfoItem">
              <span className="movieInfoKey">id:</span>
              <span className="movieInfoValue">{movie._id}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">genre:</span>
              <span className="movieInfoValue">{movie.genre}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">year:</span>
              <span className="movieInfoValue">{movie.year}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">limit:</span>
              <span className="movieInfoValue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="movieBottom">
        <form className="movieForm">
          <div className="movieFormLeft">

            <label>{movie.title}</label>
            <input type="text" placeholder={movie.title} onChange={(e) => { setTitleUpdated(e.target.value)}} />

            <label>Description</label>
            <input type="text" placeholder={movie.desc} onChange={(e) => { setDescUpdated(e.target.value) }} />

            <label>Year</label>
            <input type="text" placeholder={movie.year} onChange={(e) => { setYearUpdated(e.target.value) }} />

            <label>Genre</label>
            <input type="text" placeholder={movie.genre} onChange={(e) => { setGenreUpdated(e.target.value) }} />

            <label>Limit</label>
            <input type="text" placeholder={movie.limit} onChange={(e) => { setLimitUpdated(e.target.value) }} />

            <label>Duration</label>
            <input type="text" placeholder={movie.duration} onChange={(e) => { setDurationUpdated(e.target.value) }} />

            <label>isSeries</label>
            <input type="text" placeholder={movie.isSeries.toString()} onChange={(e) => { setIsSeriesUpdated(e.target.value) }} />

          </div>
          <div className="movieFormRight">
            <div className="movieUplaod">
              <img
                src={movie.img}
                alt=""
                className="movieUploadImage"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="movieButton" onClick={handleUpdate}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Movie;
