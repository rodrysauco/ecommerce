import React from 'react';
import { Link } from 'react-router-dom'

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => (
  <Link
    className={`menu-item ${size}`}
    to={linkUrl}
  >
    <div
      className='menu-item__background'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className='menu-item__content'>
      <h1 className='menu-item__title'>{title.toUpperCase()}</h1>
      <span className='menu-item__subtitle'>Compra now!</span>
    </div>
  </Link>
);

export default MenuItem;