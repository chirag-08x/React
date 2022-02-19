import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

// import pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import SingleCocktail from "./pages/SingleCocktail.jsx";
import Error from "./pages/Error.jsx";

// import components
import Navbar from "./components/Navbar.jsx";

// Context
import { AppProvider } from "./context.jsx";

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cocktail/:id" element={<SingleCocktail />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
