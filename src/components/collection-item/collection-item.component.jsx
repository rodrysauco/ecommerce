import React from 'react';

import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

import Button from '../button/button.component'

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='collection-item__image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='collection-item__footer'>
        <span className='collection-item__name'>{name}</span>
        <span className='collection-item__price'>{price}</span>
      </div>
      <Button onClick={() => addCartItem(item)} inverted>Agregar</Button>
    </div>
  )
};
const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);