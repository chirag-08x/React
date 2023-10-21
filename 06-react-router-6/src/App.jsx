import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  Home,
  About,
  Products,
  Error,
  SingleProduct,
  ProtectedDashboard,
} from "./Pages";
import { Navbar, Footer } from "./Components";
import SharedLayout from "./Layout/SharedLayout";

const App = () => {
  return (
    <Router>
      {/* This is one of the ways to set up shared layout, though it has it's limitations, the shared layout get's shared with every route, we can't limit it to few specific pages. */}
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer /> */}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productID" element={<SingleProduct />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <ProtectedDashboard />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

const PrivateRoute = ({ children }) => {
  // toggle the value of isAuthenticated, to visit the dashboard route.
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  if (isAuthenticated) {
    return children;
  }
  return <Navigate to={"/"} />;

  // Alternative way
  //   return isAuthenticated ? <>{children}</> : <Navigate to={"/"} />;
};

export default App;
