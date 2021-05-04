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
}