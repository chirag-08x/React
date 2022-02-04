import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "./2-useFetch.jsx";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// Don't use React optimization in every project, there are many downsides of it. React is fast by default

// every time props or state changes, component re-renders, so lets say we have a list of 10,000 items, then every time the counter value changes, that list of 10,000 elements is gonna re-render.

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <BigList products={products} />
    </>
  );
};

//React. memo is a higher order component. If your component renders the same result given the same props, you can wrap it in a call to React. memo for a performance boost in some cases by memoizing the result. It memoizes the result like we do in Dynamic Programming. Use React.memo only if value of Props in this case products doesn't changes on every re-render.

const BigList = React.memo(({ products }) => {
  useEffect(() => {
    console.log("Big List Called");
  });
  return (
    <section className="products">
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>;
      })}
    </section>
  );
});

const SingleProduct = ({ fields }) => {
  useEffect(() => {
    console.count("Single Item Called");
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};
export default Index;
