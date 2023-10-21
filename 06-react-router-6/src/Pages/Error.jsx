import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Page not found - 404</h1>
      <h1>Go back to</h1>
      <Link to={"/"}>Home Page</Link>
    </div>
  );
};

export default Error;
