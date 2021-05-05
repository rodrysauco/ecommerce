import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout">
    <div className="checkout__header">
      <div className="checkout__blocks">
        <span>Producto</span>
      </div>
      <div className="checkout__blocks">
        <span>Descripcion</span>
      </div>
      <div className="checkout__blocks">
        <span>Cantidad</span>
      </div>
      <div className="checkout__blocks">
        <span>Precio</span>
      </div>
      <div className="checkout__blocks">
        <span>Quitar</span>
      </div>
    </div>
    {cartItems.map(cartItem =>(
      <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
    ))}
    <div className="checkout__total">
      <span>Total: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);