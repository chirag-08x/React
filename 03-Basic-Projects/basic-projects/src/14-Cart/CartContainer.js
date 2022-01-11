import { useContext } from "react";
import CartItem from "./CartItem";
import { cartContext } from "./context";

const CartContainer = () => {
  const { items, sum, clearCart } = useContext(cartContext);
  if (items.length === 0) {
    return (
      <section>
        <h1>your bag</h1>
        <p>is currently empty</p>
      </section>
    );
  } else {
    return (
      <section>
        <div className="cart-items">
          {items.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <hr />
        <div className="total">
          <h5>total</h5>
          <h5>$ {sum}</h5>
        </div>
        <button className="btn" onClick={clearCart}>
          clear cart
        </button>
      </section>
    );
  }
};

export default CartContainer;
