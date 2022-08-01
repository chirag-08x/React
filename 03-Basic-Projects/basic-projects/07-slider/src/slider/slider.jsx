import { useState, useRef } from "react";
import data from "./data.js";

const Slider = () => {
  const [state, setState] = useState([...data]);

  return (
    <section className="section-center">
      <div className="main-container">
        {state.map((item) => {
          const { id, path } = item;
          return (
            <article key={id} className="container">
              <img src={path} alt="hello world" />
            </article>
          );
        })}
      </div>
      <div className="btns-container">
        <button className="prev-btn">Prev</button>
        <button className="next-btn">Next</button>
      </div>
    </section>
  );
};

export default Slider;
