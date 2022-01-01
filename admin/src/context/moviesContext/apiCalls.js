import { deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MoviesAction";
import axios from 'axios';

//Fetch all movies
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  const userObject = JSON.parse(localStorage.getItem("user"));
  try {
    const res = await axios.get("http://localhost:8800/api/movies/", {
      headers: {
        token: "Bearer " + userObject.accessToken,
      },
    });
    console.log(res)
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

//Delete Movie
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
   await axios.get("http://localhost:8800/api/movies/"+id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user").accessToken),
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (error) {
    dispatch(deleteMovieFailure());
  }
};


