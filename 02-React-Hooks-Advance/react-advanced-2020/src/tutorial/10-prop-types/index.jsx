import React from "react";
import Product from "./Product.jsx";
import { useFetch } from "../9-custom-hooks/2-useFetch.jsx";

// PropTypes are a mechanism to ensure that components use the correct data type and pass the right data. In case data is missing/unavailable it should not throw back error.

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
