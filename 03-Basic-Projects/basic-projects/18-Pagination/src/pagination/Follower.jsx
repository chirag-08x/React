import React from "react";

const Follower = ({ login, avatar_url, html_url }) => {
  return (
    <article className="card">
      <img className="user-img" src={avatar_url} alt={login} />
      <h4 className="user-name">{login}</h4>
      <a
        href={html_url}
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        view profile
      </a>
    </article>
  );
};

export default Follower;
