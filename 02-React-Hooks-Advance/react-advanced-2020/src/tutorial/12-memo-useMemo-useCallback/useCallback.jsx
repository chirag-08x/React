import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "./2-useFetch.jsx";

const url = "https://course-api.com/javascript-store-products";

// If we don't use useCallback in that case the prop that we have passed is re-rendering the element everytime since it's value is changing, in that case React.memo won't work.

const UseCallbackHook = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>Cart : {cart}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

//React. memo is a higher order component. If your component renders the same result given the same props, you can wrap it in a call to React. memo for a performance boost in some cases by memoizing the result. It memoizes the result like we do in Dynamic Programming. Use React.memo only if value of Props in this case products doesn't changes on every re-render.

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("Big List Called");
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
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
      <button onClick={addToCart}>add item</button>
    </article>
  );
};
export default UseCallbackHook;
