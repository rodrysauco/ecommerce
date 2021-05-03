import React from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='header__home' to='/'>
      <Logo className='header__logo' />
    </Link>

    <div className='header__links'>
      <Link className='header__link' to='/shop'>Tienda</Link>
      <Link className='header__link' to='/shop'>Contacto</Link>
      {
        currentUser ?
          <div className='header__link' onClick={() => auth.signOut()}>Salir</div>
          :
          <Link className='header__link' to='/login'>Ingresar</Link>
      }
      <CartIcon />
    </div>
    {
      hidden ? null :
        <CartDropdown />
    }
  </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);