import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { AppContext } from "./context";
import { useContext } from "react";

const CartItem = ({ id, title, price, img, amount }) => {
  const { removeItem, toggleAmount } = useContext(AppContext);

  return (
    <div className="single-item">
      <div className="item-img">
        <img src={img} alt="" />
      </div>
      <div className="item-info">
        <h5>{title}</h5>
        <p>${price}</p>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div className="quantity">
        <button
          className="increase change"
          onClick={() => toggleAmount(id, "INC")}
        >
          <FaChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="decrease change"
          onClick={() => toggleAmount(id, "DEC")}
        >
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
