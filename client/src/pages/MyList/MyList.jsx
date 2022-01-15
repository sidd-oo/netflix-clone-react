import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import "./MyList.scss";
import "../../App.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";

const MyList = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getRandomLists = async () => {
      if (location.pathname === "/myList") {
        setGenre(null);
      }
      try {
        const userObject = JSON.parse(localStorage.getItem("user"));
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_PROXY}/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token: "Bearer " + userObject.accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="myList">
      <Navbar />

      <div className="lists">
        {/* {lists.map((list) => {
          return <List list={list} key={list._id} />;
        })} */}
      </div>
    </div>
  );
};

export default MyList;
