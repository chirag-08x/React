import { useParams } from "react-router-dom";
import { products } from "../utils/helper";

const SingleProduct = () => {
  const { productID } = useParams();
  const singleItem = products.find(
    (product) => product.id === parseInt(productID)
  );

  return (
    <div>
      <h1>{singleItem.name}</h1>
      <h1>SingleProduct with ProductID - {singleItem.id}</h1>
    </div>
  );
};

export default SingleProduct;
