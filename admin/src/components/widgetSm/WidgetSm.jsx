import { Visibility } from "@mui/icons-material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WidgetSm.css";

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzJmYjU4YjhhZTBjZDJjNjE4Yzc0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDYwNDMwOSwiZXhwIjoxNjQxMDM2MzA5fQ.9ulVFSXWh_VqTOjY7c4nt2dI8Nj49_Q-x4IFDc7vwR8",
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
