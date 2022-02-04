// Using react Router we don't have to do server side routing, instead we do client side routing i.e. we render the component without making a server side call. Which gives us a better speed and does not reload the page.

// We have to wrap our whole application inside the Router Component.
// Inside Route we set up the routes to a specific page depending upon our url.
// Routes - Only the first URL that matches is displayed

import React, { useEffect } from "react";
// react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import Home from "./Home.jsx";
import About from "./About.jsx";
import People from "./People.jsx";
import Error from "./Error.jsx";
import Person from "./Person.jsx";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
        {/* :id stores the id that is coming form people.jsx  */}
        <Route path="/person/:id" element={<Person />} />
        {/* Setting the path to "*" will act as a catch-all for any undefined URLs. This is great for a 404 error page. */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
