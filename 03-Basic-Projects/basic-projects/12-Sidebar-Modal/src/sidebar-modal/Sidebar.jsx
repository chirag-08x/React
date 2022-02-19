import React, { useContext } from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { AppContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext);
  return (
    <nav className={isSidebarOpen ? `sidebar show-sidebar` : `sidebar`}>
      <div className="sidebar-img">
        <img src={logo} alt="" />
        <button type="button" className="close-btn" onClick={closeSidebar}>
          {<FaTimes />}
        </button>
      </div>

      <article className="links-container">
        <ul className="sidebar-links">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <a key={id} href={url}>
                <li>
                  {icon}
                  {text}
                </li>
              </a>
            );
          })}
        </ul>
      </article>

      <article className="social-links">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
            </a>
          );
        })}
      </article>
    </nav>
  );
};

export default Sidebar;
