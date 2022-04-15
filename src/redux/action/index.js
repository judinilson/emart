// For Add item to the cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    preload: product,
  };
};

// For Delete item from the cart
export const deleteCart = (product) => {
  return { type: "DELITEM", preload: product };
};
