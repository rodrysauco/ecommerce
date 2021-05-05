export const addItemToCart = (cartItems, newItem) => {
  const exists = cartItems.find(cartItem => cartItem.id === newItem.id);

  if (exists) {
    return cartItems.map(cartItem => {
      return cartItem.id === newItem.id ?
        { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    });
  };
  return [...cartItems, { ...newItem, quantity: 1 }]
};

export const removeItemFromList = (cartItems, cartItemToRemove) => {
  const exists = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  if (exists.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem => {
    return cartItem.id === cartItemToRemove.id ?
      { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  });
};