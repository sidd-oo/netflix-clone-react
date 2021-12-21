import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./Home.scss";
import "../../App.scss";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjQ2MjUxMzhhNzIzZjc5ZGM4MThlYiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzkyMzQwOTEsImV4cCI6MTYzOTY2NjA5MX0.7XoxSqvvVrFKqCyB9C59mD15jemJWBvjnssmoc5A5ag",
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
      <Featured type={type} />

      {lists.map((list) => {
        return <List list={list} key={list._id} />;
      })}
    </div>
  );
};

export default Home;
