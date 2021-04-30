import React from 'react'

import Login from '../../components/login/login.component';
import Register from '../../components/register/register.component';
import './login.styles.scss';

const LoginPage = () => (
    <div className='login-page'>
        <Login />
        <Register />
    </div>
);

export default LoginPage;