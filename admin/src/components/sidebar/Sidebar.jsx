import React from "react";
import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BarChartIcon from "@mui/icons-material/BarChart";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Report from "@mui/icons-material/Report";
import MailOutline from "@mui/icons-material/MailOutline";
import Timeline from "@mui/icons-material/Timeline";
import { PlayCircleOutline } from "@mui/icons-material";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { Link } from "react-router-dom";

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
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
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
            <li className="sidebarListItem">
              <BarChartIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutlineIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
