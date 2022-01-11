import React, { useContext } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { cartContext } from "./context";

const Navbar = () => {
  const { items } = useContext(cartContext);
  return (
    <nav className="navbar">
      <h1 className="title">UseReducer</h1>

      <div className="total-items">
        <FaShoppingBag />
        <p className="items-number">{items.length}</p>
      </div>
    </nav>
  );
};

export default Navbar;
