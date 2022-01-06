import React from "react";
import "./List.css";
import { Link, useLocation } from "react-router-dom";

const List = () => {
  const location = useLocation();
  const list = location.state.list;
  return (
    <div className="list">
      <div className="listTitleContainer">
        <h1 className="listTitle">List</h1>
        <Link to="/newlist">
          <button className="listAddButton">Create</button>
        </Link>
      </div>
      <div className="listTop">
        <div className="listTopRight">
          <div className="listInfoTop">
            <span className="listName">{list.title}</span>
          </div>
          <div className="listInfoBottom">
            <div className="listInfoItem">
              <span className="listInfoKey">id:</span>
              <span className="listInfoValue">{list._id}</span>
            </div>
            <div className="listInfoItem">
              <span className="listInfoKey">genre:</span>
              <span className="listInfoValue">{list.genre}</span>
            </div>
            <div className="listInfoItem">
              <span className="listInfoKey">type:</span>
              <span className="listInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="listBottom">
        <form className="listForm">
          <div className="listFormLeft">
            <label>List Title</label>
            <input type="text" placeholder={list.title} />

            <label>Type</label>
            <input type="text" placeholder={list.type}/>

            <label>Genre</label>
            <input type="text" placeholder={list.genre}/>
          </div>
          <div className="listFormRight">
            <button className="listButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default List;
