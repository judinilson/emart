const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.preload;

  switch (action.type) {
    case "ADDITEM":
      //Check if the product already exists
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        //Increasse the quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.preload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

      break;
    default:
      return state;
      break;
  }
};

export default handleCart;
