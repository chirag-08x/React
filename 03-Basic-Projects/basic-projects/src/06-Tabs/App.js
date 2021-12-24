import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./index.css";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTabs(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <h1 className="loading">Loading....</h1>
      </main>
    );
  }

  const { company, dates, duties, title } = tabs[value];

  return (
    <main>
      <section className="section-center">
        <div className="title-container">
          <h1 className="title">experience</h1>
          <div className="underline"></div>
        </div>

        <div className="hero-container">
          <div className="btn-container">
            {tabs.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`btn  ${index === value && "active-btn"}`}
                  onClick={() => setValue(index)}
                >
                  {item.company}
                </button>
              );
            })}
          </div>

          <div className="info-continaer">
            <div className="user-info">
              <h3 className="user-role">{title}</h3>
              <h1 className="company">{company}</h1>
              <p className="date">{dates}</p>
            </div>

            <div className="user-duties">
              {duties.map((duty, index) => {
                return (
                  <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p className="desc">{duty}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button className="more-info-btn">more info</button>
      </section>
    </main>
  );
}

export default App;
