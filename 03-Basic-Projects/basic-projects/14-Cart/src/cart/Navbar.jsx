import { FaShoppingBag } from "react-icons/fa";
import { AppContext } from "./context";
import { useContext } from "react";

const Navbar = () => {
  const { state } = useContext(AppContext);
  return (
    <nav className="navbar">
      <article className="nav-items">
        <h1>UseReducer</h1>
        <article className="bag">
          <FaShoppingBag className="bag-icon" />
          <p className="items-number">{state.items.length}</p>
        </article>
      </article>
    </nav>
  );
};

export default Navbar;
