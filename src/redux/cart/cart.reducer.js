import { CartActionTypes } from './cart.types';
const CART_INITIAL_STATE = {
  hidden: true
};

const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      }

    default:
      return state;
  }
};

export default cartReducer;