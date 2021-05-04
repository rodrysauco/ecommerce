import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items">
      {cartItems.length ?
        cartItems.map(cartItem =>
          <CartItem key={cartItem.id} item={cartItem} />)
        : (
          <span className="cart-dropdown__empty">Carro vacío</span>)
      }
    </div>
    <Button onClick={()=> history.push('/checkout')}> Ir al Carrito</Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));