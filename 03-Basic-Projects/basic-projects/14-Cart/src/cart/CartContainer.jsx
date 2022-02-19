import { AppContext } from "./context";
import { useContext } from "react";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { state, clearCart } = useContext(AppContext);

  if (state.items.length === 0) {
    return (
      <section className="cart-container">
        <h1 className="title">your bag</h1>
        <p className="subtitle">is currently empty</p>
      </section>
    );
  }
  return (
    <section className="cart-container">
      <h1 className="title">your bag</h1>
      <article className="cart-items">
        {state.items.map((item) => {
          return <CartItem key={item.id} {...item}></CartItem>;
        })}
      </article>

      <hr />

      <footer className="footer">
        <h5>total</h5>
        <h5>$ {state.totalAmount}</h5>
      </footer>

      <button className="btn clear-btn" onClick={clearCart}>
        clear cart
      </button>
    </section>
  );
};

export default CartContainer;
