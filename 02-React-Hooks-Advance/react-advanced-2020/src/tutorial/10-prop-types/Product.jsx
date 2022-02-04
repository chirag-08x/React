import React from "react";
import PropTypes from "prop-types";
// Importing images
import defaultImage from "../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className="product">
      <img src={url || defaultImage} alt={name || "default name"} />
      <h4>{name || "default name"}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

// Property name must match the prop name.
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// Setting up default values for propTypes
// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
