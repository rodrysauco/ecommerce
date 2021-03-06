import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromList } from './cart.utils';

const CART_INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromList(state.cartItems, action.payload)
      };

    case CartActionTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      };

    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }

    default:
      return state;
  }
};

export default cartReducer;