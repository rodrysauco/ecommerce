import React from 'react';

import './button.styles.scss';

const Button = ({ children, isGoogleLogin, ...otherProps }) => (
  <button className={`button ${isGoogleLogin ? 'button--google' : ''}`} {...otherProps}>
    {children}
  </button>
);

export default Button;