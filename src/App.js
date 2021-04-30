import React from 'react';
import { Route, Switch } from 'react-router';
import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import LoginPage from './pages/login/login.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSuscribeFromAuth = null;

  componentDidMount() {
    this.unSuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            }
          });
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth })
      }
    });
  }

  componentWillUnmount() {
    this.unSuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
