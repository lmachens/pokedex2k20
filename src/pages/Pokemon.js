import React from "react";
import { useParams } from "react-router-dom";

function Pokemon() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { name } = useParams();

  return <div>{name}</div>;
}

export default Pokemon;
