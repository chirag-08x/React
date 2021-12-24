import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import "./index.css";

function App() {
  const [meal, setMeal] = useState(items);

  return (
    <main>
      <section className="container">
        <div className="title-container">
          <h1 className="title">our menu</h1>
          <div className="underline"></div>
        </div>

        <Categories setmeal={setMeal} items={items}></Categories>
        <Menu items={meal}></Menu>
      </section>
    </main>
  );
}

export default App;
