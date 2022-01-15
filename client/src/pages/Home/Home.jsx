import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./Home.scss";
import "../../App.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const location = useLocation();


  useEffect(() => {
    const getRandomLists = async () => {
      if(location.pathname === "/"){
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
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre = {setGenre} />

      {lists.map((list) => {
        return <List list={list} key={list._id} />;
      })}
    </div>
  );
};

export default Home;
