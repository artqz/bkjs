import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import GamePage from './pages/Game';
import LoginPage from './pages/Login';


class App extends Component {
  render() {
    return (
      <Router>
        <div>         
          <NavBar />
          <Route path="/login/" component={LoginPage} />
          <Route path="/game/" component={GamePage} />
        </div>
      </Router>
    );
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function PrivateRoute({ component: Component, ...rest }) {  
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default connect(
  state => ({
    testStore: state.player
  }),
  dispatch => ({})
)(App);
