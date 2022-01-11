import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";

const Sidebar = () => {
  return (
    <section className="sidebar-container">
      <article className="sidebar">
        <FaTimes className="close-icon"></FaTimes>
        {sublinks.map((sublink, index) => {
          const { page, links } = sublink;
          return (
            <div key={index} className={page} className="sulink-container">
              <h5 className="sublink-title">{page}</h5>
              <div className="sublinks">
                {links.map((singleLink) => {
                  const { label, icon, url } = singleLink;
                  return (
                    <a href={url} className="single-link">
                      {icon} {label}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Sidebar;
