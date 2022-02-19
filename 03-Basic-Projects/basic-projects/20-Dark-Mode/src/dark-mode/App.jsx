import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";
import "./index.css";

const getStoredTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStoredTheme());

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
  };

  return (
    <main className="dark-mode">
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={handleToggle}>
            toggle
          </button>
        </div>
      </nav>

      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
