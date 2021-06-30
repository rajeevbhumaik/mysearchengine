import React from "react";
import { Link } from "react-router-dom";
import "../css/Header_Search.css";
import AppIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

function HeaderSearch() {
  return (
    <div className="Header">
      <div className="gmail">
        <Link to="/gmail">Gmail</Link>
      </div>
      <div className="images">
        <Link to="/images">Images</Link>
      </div>
      <div className="app_icon">
        <AppIcon />
      </div>
      <div className="avatar">
        <Avatar />
      </div>
    </div>
  );
}

export default HeaderSearch;
