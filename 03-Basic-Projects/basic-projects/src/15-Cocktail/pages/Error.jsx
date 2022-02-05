import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section-center error-center">
      <h2 className="error-title">oops ! it's a dead end</h2>
      <Link className="home-link" to={"/"}>
        back home
      </Link>
    </section>
  );
};

export default Error;
