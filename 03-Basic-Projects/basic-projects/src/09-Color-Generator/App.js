import React, { useState } from "react";
import SingleColor from "./SingleColor";
import "./index.css";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={error ? "error" : null}
          />
          <button className="btn">generate</button>
        </form>
      </section>

      <section className="colors">
        {list.map((item, index) => {
          return (
            <SingleColor key={index} {...item} index={index}></SingleColor>
          );
        })}
      </section>
    </>
  );
}

export default App;
