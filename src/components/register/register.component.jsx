import React from "react";
import { connect } from 'react-redux';

import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';
import { signUpStart } from "../../redux/user/user.actions";

import './register.styles.scss';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    };
    signUpStart({ displayName, email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="register">
        <h2 className="register__title">No tengo cuenta</h2>
        <span className="register__subtitle">Registrarse con email y contraseña</span>
        <form onSubmit={this.handleSubmit} className="register__form">
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Nombre'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Contraseña'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirmar Contraseña'
            required
          />
          <Button type='submit'>Registrarse</Button>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(Register);