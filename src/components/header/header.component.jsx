import React from 'react';
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='header__home' to='/'>
      <Logo className='header__logo' />
    </Link>

    <div className='header__links'>
      <Link className='header__link' to='/shop'>Tienda</Link>
      <Link className='header__link' to='/shop'>Contacto</Link>
    </div>
  </div>
)

export default Header;