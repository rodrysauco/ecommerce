import React from 'react';
import { connect } from 'react-redux';

import { clearItemCart, addCartItem, removeCartItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItemCart, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <div className="checkout-item">
      <div className="checkout-item__image">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="checkout-item__name">{name}</span>
      <span className="checkout-item__quantity">
        <div className="checkout-item__arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="checkout-item__value">{quantity}</span>
        <div className="checkout-item__arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="checkout-item__name">{price}</span>
      <div className="checkout-item__remove" onClick={() => clearItemCart(cartItem)}>&#10005;</div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  clearItemCart: item => dispatch(clearItemCart(item)),
  addItem: item => dispatch(addCartItem(item)),
  removeItem: item => dispatch(removeCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);