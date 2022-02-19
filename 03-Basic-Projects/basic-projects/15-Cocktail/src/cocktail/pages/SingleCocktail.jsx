import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [loading, setLoading] = useState(true);
  const [drink, setDrink] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    const fetchDrinkById = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}${id}`);
        const drink = await response.json();
        const { drinks } = drink;
        setDrink(drinks[0]);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
        setLoading(false);
      }
    };
    fetchDrinkById();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (drink === null) {
    return <h1 style={{ marginTop: "2rem" }}>Drink Not Found</h1>;
  }

  const {
    strDrink,
    strAlcoholic,
    strCategory,
    strGlass,
    strInstructions,
    strDrinkThumb,
  } = drink;

  const ingridients = [];

  for (let i = 1; i <= 15; i++) {
    const current = drink[`strIngredient${i.toString()}`];
    if (current === null) {
      break;
    }
    ingridients.push(current);
  }

  return (
    <section className="section-center single-center">
      <div className="btn-container">
        <Link className="home-link single-home-link" to={"/"}>
          back home
        </Link>
        <h1>{strDrink}</h1>
      </div>
      <article className="drink-details">
        <img src={strDrinkThumb} alt={strDrink} />
        <div className="cocktail-info">
          <h2>
            <span>name:</span> {strDrink}
          </h2>
          <h2>
            <span>category:</span> {strCategory}
          </h2>
          <h2>
            <span>info:</span> {strAlcoholic}
          </h2>
          <h2>
            <span>glass:</span> {strGlass}
          </h2>
          <h2>
            <span>instructions:</span> {strInstructions}
          </h2>
          <h2>
            <span>instructions:</span> {ingridients.join(", ")}
          </h2>
        </div>
      </article>
    </section>
  );
};

export default SingleCocktail;
