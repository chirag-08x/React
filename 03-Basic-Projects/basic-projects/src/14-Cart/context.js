import React, { useReducer, useEffect } from "react";
import data from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const defaultState = {
  items: data,
  totalAmount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.items]);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        removeItem,
        toggleAmount,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

//   const increaseAmount = (id) => {
//     dispatch({ type: "INCREASE_AMOUNT", payload: id });
//   };

//   const decreaseAmount = (id, amount) => {
//     if (amount === 1) {
//       dispatch({ type: "REMOVE_ITEM", payload: id });
//     } else {
//       dispatch({ type: "DECREASE_AMOUNT", payload: id });
//     }
//   };
