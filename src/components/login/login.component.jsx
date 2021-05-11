import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { auth, loginWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart } from '../../redux/user/user.actions';
import './login.styles.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error('Error al loguearse: ', error.message);
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    const { googleSignInStart } = this.props;

    return (
      <div className='login'>
        <h2 className='login__title'>Ingresar</h2>
        <span className='login__subtitle'>Con tu email y contraseña</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            handleChange={this.handleChange}
            label='Email'
            type='email'
            value={this.state.email}
            required
          />
          <FormInput
            name='password'
            handleChange={this.handleChange}
            label='Contraseña'
            type='password'
            value={this.state.password}
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
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(Login);
