import { PlayCircleOutline } from "@mui/icons-material";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem ">
                <PermIdentityIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li className="sidebarListItem">
                <PlayCircleOutline className="sidebarIcon" />
                Movies
              </li>
            </Link>
            <Link to="/lists" className="link"> 
              <li className="sidebarListItem">
                <LocalMoviesIcon className="sidebarIcon" />
                Lists
              </li>
            </Link>
            <Link to="/newMovie" className="link"> 
              <li className="sidebarListItem">
                <VideoLibraryIcon className="sidebarIcon" />
                Add Movie
              </li>
            </Link>
            <Link to="/newList" className="link"> 
              <li className="sidebarListItem">
                <PlaylistAddIcon className="sidebarIcon" />
                Add Movie List
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
