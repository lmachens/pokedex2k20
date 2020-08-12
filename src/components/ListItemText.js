import React from "react";
import "./ListItemText.css";

function ListItemText({ primary, secondary }) {
  return (
    <div className="listItemText">
      <span className="listItemText___primary">{primary}</span>
      <span className="listItemText___secondary">{secondary}</span>
    </div>
  );
}

export default ListItemText;
