import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, setQuery } = useGlobalContext();
  return (
    <section className="form-container">
      <form className="form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </section>
  );
};

export default SearchForm;
