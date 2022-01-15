import { Visibility } from "@mui/icons-material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WidgetSm.css";

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);
  
  
  useEffect(() => {
    const getNewUsers = async () => {
      const userObject = JSON.parse(localStorage.getItem("user"));
      console.log(userObject)
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_PROXY}/api/users?new=true`, {
          headers: {
            token:
              "Bearer " + userObject.accessToken,
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <div className="widgetSmList">
        {newUsers.map((user, i) => (
          <li className="widgetSmListItem" key = {i}>
            <img
              src={
                user.profilePic ||
                "https://i.pinimg.com/474x/c3/53/7f/c3537f7ba5a6d09a4621a77046ca926d--soccer-quotes-lineman.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default WidgetSm;
