import React from "react";

import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './register.styles.scss';

export default class Register extends React.Component {
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

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error('Error al registrar usuario', error.message);
    }
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
}