import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './login.styles.scss';

const Login = ({ emailSignInStart, googleSignInStart }) => {

  const [userCredentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className='login'>
      <h2 className='login__title'>Ingresar</h2>
      <span className='login__subtitle'>Con tu email y contraseña</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          handleChange={handleChange}
          label='Email'
          type='email'
          value={email}
          required
        />
        <FormInput
          name='password'
          handleChange={handleChange}
          label='Contraseña'
          type='password'
          value={password}
          required
        />
        <div className="login__actions">
          <Button type="submit"> Ingresar</Button>
          <Button type='button' onClick={googleSignInStart} isGoogleLogin> Ingresar con Google</Button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(Login);
