import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { getMovies } from "../../context/moviesContext/apiCalls";
import "./NewList.css";
import { useNavigate } from "react-router-dom";
import { ListsContext } from "../../context/listsContext/ListContext";
import { MovieContext } from "../../context/moviesContext/MoviesContext";
import { createList } from "../../context/listsContext/apiCalls";

const NewList = () => {
  const [list, setList] = useState(null);
  const navigate = useNavigate();

  const { dispatch } = useContext(ListsContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
    console.log(list)
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    navigate("/lists");
  };

  return (
    <div className="newList">
      <h1 className="addListTitle">New List</h1>
      <form className="addListForm">
        <div className="formLeftRight"></div>
        <div className="formLeft">
          <div className="addListItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Popular Movies"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addListItem">
            <label>Genre</label>
            <input type="text" name="genre" placeholder="Genre" onChange={handleChange} />
          </div>
          <div className="addListItem">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="serie">Series</option>
            </select>
          </div>
        </div>
        <div className="formRight">
          <div className="addListItem">
            <label>Content</label>
            <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: "280px" }}
            >
              {movies.map((movie) => {
                return (
                  <option key={movie._id} value={movie._id}>
                    {movie.title}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="formButton">
          <button className="addListButton" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewList;
