import { CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';

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
      }

    case CartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
};

export default cartReducer;