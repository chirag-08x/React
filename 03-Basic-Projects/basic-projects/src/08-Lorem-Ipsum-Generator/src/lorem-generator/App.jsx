import React, { useState } from "react";
import data from "./data";
import "./index.css";

function App() {
  const [index, setIndex] = useState(0);
  const [para, setPara] = useState([]);

  const handleChange = (e) => {
    setIndex(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(index);
    if (!amount || amount <= 0) {
      amount = 1;
    } else if (amount > data.length) {
      amount = data.length;
    }
    setPara(data.slice(0, amount));
  };

  return (
    <main>
      <section className="section-center">
        <div className="form-section">
          <h1 className="title">tired of boring lorem ipsum ?</h1>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="number-input">Paragraphs : </label>
            <input
              type="number"
              value={index}
              id="number-input"
              onChange={handleChange}
            />
            <button type="submit" className="btn">
              generate
            </button>
          </form>
        </div>

        <section className="info-section">
          {para.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
