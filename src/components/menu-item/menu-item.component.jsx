import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    className={`menu-item ${size}`}
  >
    <div
      className='menu-item__background'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className='menu-item__content'>
      <h1 className='menu-item__title'>{title.toUpperCase()}</h1>
      <span className='menu-item__subtitle'>Compra now!</span>
    </div>
  </div>
);

export default MenuItem;