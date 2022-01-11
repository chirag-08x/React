import React from "react";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { AppProvider } from "./context";
import "./index.css";

const App = () => {
  return (
    <AppProvider>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </AppProvider>
  );
};

export default App;
