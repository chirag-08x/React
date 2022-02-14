import React from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
const Home = () => {
  return (
    <main className="main">
      <section className="section-center">
        <h1>search movies</h1>
        <Form />
        <Movies />
      </section>
    </main>
  );
};

export default Home;
