import React from 'react';
import './cart-dropdown.styles.scss';

import Button from '../button/button.component';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items"></div>
    <Button> Ir al Carrito</Button>
  </div>
);

export default CartDropdown;