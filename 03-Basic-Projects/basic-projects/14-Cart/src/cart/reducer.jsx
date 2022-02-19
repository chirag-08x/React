const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    const newState = state.items.filter((item) => item.id !== action.payload);
    return { ...state, items: newState };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  if (action.type === "GET_TOTAL") {
    let total = state.items.reduce((acc, curr) => {
      const { price, amount } = curr;
      acc += price * amount;
      return acc;
    }, 0);

    total = parseFloat(total.toFixed(2));
    return { ...state, totalAmount: total };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    let tempItems = state.items
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "INC") {
            return { ...item, amount: item.amount + 1 };
          }
          if (action.payload.type === "DEC") {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, items: tempItems };
  }
};

export default reducer;

//   if (action.type === "INCREASE_AMOUNT") {
//     let newAmount = state.totalAmount;
//     const newItems = state.items.map((item) => {
//       if (item.id === action.payload) {
//         item.amount += 1;
//         newAmount += item.price;
//       }
//       return item;
//     });
//     return { items: newItems, totalAmount: newAmount };
//   }

//   if (action.type === "DECREASE_AMOUNT") {
//     let newAmount = state.totalAmount;
//     const newItems = state.items.map((item) => {
//       if (item.id === action.payload) {
//         item.amount -= 1;
//         newAmount -= item.price;
//       }
//       return item;
//     });
//     return { items: newItems, totalAmount: newAmount };
//   }
