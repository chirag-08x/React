import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./index.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newtours = tours.filter((item) => item.id !== id);
    setTours(newtours);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  } else if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchData}>
            refresh
          </button>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <Tours tours={tours} removeTours={removeTours}></Tours>
      </main>
    );
  }
}

export default App;
