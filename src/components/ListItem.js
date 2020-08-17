import "./ListItem.css";
import React from "react";
import { Link } from "react-router-dom";

function ListItem({ href, children }) {
  return (
    <Link className="listItem" to={href}>
      {children}
    </Link>
  );
}

export default ListItem;
