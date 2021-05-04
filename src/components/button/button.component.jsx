import React from 'react';

import './button.styles.scss';

const Button = ({ children, isGoogleLogin, inverted, ...otherProps }) => (
  <button
    className=
    {`button ${isGoogleLogin ? 'button--google' : ''} ${inverted ? 'invertido' : ''}`} {...otherProps}>
    {children}
  </button>
);

export default Button;