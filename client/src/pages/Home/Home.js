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
          `http://172.18.250.193:8800/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzJmYjU4YjhhZTBjZDJjNjE4Yzc0OCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDAxNjg1NDUsImV4cCI6MTY0MDYwMDU0NX0.LfHGvOB_tLad_UGPoYci1foklfvHkHMNHM2TT-K140s",
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
