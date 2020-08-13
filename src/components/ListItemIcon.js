import React from "react";
import "./ListItemIcon.css";

function ListItemIcon({ src, alt }) {
  return <img className="listItemIcon" src={src} alt={alt} />;
}

export default ListItemIcon;
