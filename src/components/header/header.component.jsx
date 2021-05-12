import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


import { HeaderContainer, LogoContainer, LinksContainer, LinkStyled } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='header__logo' />
    </LogoContainer>

    <LinksContainer>
      <LinkStyled to='/shop'>Tienda</LinkStyled>
      <LinkStyled to='/shop'>Contacto</LinkStyled>
      {
        currentUser ?
          <LinkStyled as='div' onClick={signOutStart}>Salir</LinkStyled>
          :
          <LinkStyled to='/login'>Ingresar</LinkStyled>
      }
      <CartIcon />
    </LinksContainer>
    {
      hidden ? null :
        <CartDropdown />
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);