import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import React, { useContext } from "react";
import { cartContext } from "./context";

const CartItem = ({ id, title, price, img, amount }) => {
  const { increaseAmount, decreaseAmount } = useContext(cartContext);

  return (
    <div className="single-item">
      <img src={img} alt="" className="item-image" />
      <article className="item-info">
        <h4 className="item-name">{title}</h4>
        <p className="item-price">${price}</p>
        <button className="btn">remove</button>
      </article>

      <article className="item-amount">
        <button className="increase" onClick={() => increaseAmount(id)}>
          <FaChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="decrease" onClick={() => decreaseAmount(id, amount)}>
          <FaChevronDown />
        </button>
      </article>
    </div>
  );
};

export default CartItem;
