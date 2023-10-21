import { products } from "../utils/helper";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      {products.map(({ id, name }) => {
        return (
          <article key={id}>
            <h3>{name}</h3>
            <Link to={`/products/${id}`}>Go to product</Link>
          </article>
        );
      })}
    </div>
  );
};

export default Products;
