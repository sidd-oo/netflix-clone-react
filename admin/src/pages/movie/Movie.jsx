import React from "react";
import "./Movie.css";
import { Link, useLocation } from "react-router-dom";
import { Publish } from "@mui/icons-material";

const Movie = () => {
  const location = useLocation();
  const movie = location.movie;
  console.log(location);
  console.log(movie);
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
              // src={movie.img}
              alt=""
              className="movieInfoImg"
            />
            <span className="movieName">{movie.title}</span>
          </div>
          <div className="movieInfoBottom">
            <div className="movieInfoItem">
              <span className="movieInfoKey">id:</span>
              <span className="movieInfoValue">{movie.id}</span>
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
            <input type="text" placeholder={movie.title} />
            <label>Year</label>
            <input type="text" placeholder={movie.year}/>

            <label>Genre</label>
            <input type="text" placeholder={movie.genre}/>

            <label>isSeries</label>
            <input type="text" placeholder={movie.isSeries}/>

            <label>limit</label>
            <input type="text" placeholder={movie.limit}/>

            <label>Video</label>
            <input type="text" placeholder={movie.video}/>

            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
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
            <button className="movieButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Movie;
