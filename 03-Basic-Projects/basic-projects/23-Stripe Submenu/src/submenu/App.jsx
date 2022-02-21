import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
function App() {
  return (
    <main className="main">
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </main>
  );
}

export default App;
