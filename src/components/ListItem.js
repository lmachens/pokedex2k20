import "./ListItem.css";
import React from "react";

function ListItem(props) {
  return (
    <a className="listItem" href={props.href}>
      {props.children}
    </a>
  );
}

export default ListItem;
