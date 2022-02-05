import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { isLoading, cocktails } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <section className="section-center">
        <h2 className="not-found">no cocktails matched your search criteria</h2>
      </section>
    );
  }

  return (
    <section className="section-center">
      <h1>cocktails</h1>

      <article className="cocktails">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </article>
    </section>
  );
};

export default CocktailList;
