import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { useContext } from "react";
import { AuthContext } from "../../../../admin/src/context/authContext/AuthContext";
import { logout } from "../../../../admin/src/context/authContext/AuthActions";
import "./Topbar.css";

const Topbar = () => {
  const { dispatch } = useContext(AuthContext);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">devsAdmin</div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer profile">
            <SettingsIcon />
            <div className="options">
              <span>Netflix</span>
              <span
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Logout
              </span>
            </div>
          </div>
          <div className="topbarIconContainer ">
            <img
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
