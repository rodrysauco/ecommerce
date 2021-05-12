import React, { useState } from "react";
import { connect } from 'react-redux';

import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';
import { signUpStart } from "../../redux/user/user.actions";

import './register.styles.scss';

const Register = ({ signUpStart }) => {

  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    };
    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="register">
      <h2 className="register__title">No tengo cuenta</h2>
      <span className="register__subtitle">Registrarse con email y contraseña</span>
      <form onSubmit={handleSubmit} className="register__form">
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Nombre'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Contraseña'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirmar Contraseña'
          required
        />
        <Button type='submit'>Registrarse</Button>
      </form>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(Register);