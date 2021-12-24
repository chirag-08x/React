import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import "./index.css";

function App() {
  const [userIdx, setUserIdx] = useState(0);
  const { image, name, title, quote } = data[userIdx];

  const prevUser = () => {
    if (userIdx === 0) {
      setUserIdx(data.length - 1);
    } else {
      setUserIdx((prevIdx) => prevIdx - 1);
    }
  };

  const nextUser = () => {
    if (userIdx === data.length - 1) {
      setUserIdx(0);
    } else {
      setUserIdx((prevIdx) => prevIdx + 1);
    }
  };

  return (
    <main>
      <section className="section-center">
        <div className="title-container">
          <h1 className="title">
            <span className="slash">/</span>reviews
          </h1>
        </div>

        <section className="user-info">
          <article className="user-data">
            <img src={image} alt={name} />
            <h2 className="name">{name}</h2>
            <p className="role">{title}</p>
            <p className="desc">{quote}</p>
            <FaQuoteRight className="icon"></FaQuoteRight>
          </article>
          <button className="btn left-btn" onClick={prevUser}>
            {<FiChevronLeft></FiChevronLeft>}
          </button>
          <button className="btn right-btn" onClick={nextUser}>
            {<FiChevronRight></FiChevronRight>}
          </button>
        </section>
      </section>
    </main>
  );
}

export default App;
