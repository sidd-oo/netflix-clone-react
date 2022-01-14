import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(() => false);

  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(() => (window.pageYOffset === 0 ? false : true));
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled === false ? "navbar" : "navbar scrolled"}>
      <div className="container">
        <div className="left">
          <Link to="/" className="link">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix logo"
          />
          </Link>
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <Link to="/newPopular" className="link">
            <span>New and Popular</span>
          </Link>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
