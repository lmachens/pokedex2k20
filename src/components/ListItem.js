import "./ListItem.css";
import React from "react";

function ListItem({ href, children }) {
  return (
    <a className="listItem" href={href}>
      {children}
    </a>
  );
}

export default ListItem;
