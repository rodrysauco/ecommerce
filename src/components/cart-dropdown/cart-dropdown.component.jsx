import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items">
    {cartItems.map(cartItem =>
      <CartItem key={cartItem.id} item={cartItem}/>)}
    </div>
    <Button> Ir al Carrito</Button>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } })=>({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);