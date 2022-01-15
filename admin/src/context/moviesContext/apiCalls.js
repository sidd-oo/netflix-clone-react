import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MoviesAction";
import axios from 'axios';

//Fetch all movies
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  const userObject = JSON.parse(localStorage.getItem("user"));
  try {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_PROXY}/api/movies/`, {
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
  const userObject = JSON.parse(localStorage.getItem("user"));
  try {
   await axios.delete(`${process.env.REACT_APP_BACKEND_PROXY}/api/movies/${id}`, {
      headers: {
        token: "Bearer " + userObject.accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (error) {
    dispatch(deleteMovieFailure());
  }
};

//create Movie
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  const userObject = JSON.parse(localStorage.getItem("user"));
  try {
   const res = await axios.post(`${process.env.REACT_APP_BACKEND_PROXY}/api/movies/`, movie,  {
      headers: {
        token: "Bearer " + userObject.accessToken,
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (error) {
    dispatch(createMovieFailure());
  }
};
