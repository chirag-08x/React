import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  );
}

export default App;
