import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items">
      {cartItems.map(cartItem =>
        <CartItem key={cartItem.id} item={cartItem} />)}
    </div>
    <Button> Ir al Carrito</Button>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);