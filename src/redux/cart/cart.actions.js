import { CartActionTypes } from './cart.types';

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART
});

export const addCartItem = item => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item
});

export const removeCartItem = item => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: item
});

export const clearItemCart = item => ({
  type: CartActionTypes.CLEAR_CART_ITEM,
  payload: item
});