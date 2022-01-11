import React, { useState } from "react";
import data from "./data";
const cartContext = React.createContext();

const AppProvider = ({ children }) => {
  const [items, setItems] = useState(data);

  const increaseAmount = (id) => {
    items.map((item) => {
      if (item.id === id) {
        item.amount += 1;
      }
    });
    setItems([...items]);
  };

  const decreaseAmount = (id, amount) => {
    if (amount == 1) {
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
    } else {
      items.map((item) => {
        if (item.id === id) {
          item.amount -= 1;
          setItems([...items]);
        }
      });
    }
  };

  const clearCart = () => {
    setItems([]);
  };

  let sum = 0;
  let x = items.map((item) => {
    return (sum += item.price * item.amount);
  });

  sum = Math.round(sum * 100) / 100;

  console.log(sum);
  return (
    <cartContext.Provider
      value={{ items, increaseAmount, decreaseAmount, sum, clearCart }}
    >
      {children}
    </cartContext.Provider>
  );
};

export { AppProvider, cartContext };
