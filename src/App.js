import React, { useEffect, useContext } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import history from './history';
import { loggedIn } from './middleware/auth';
import NavBar from './components/NavBar';
import GamePage from './pages/Game';
import LoginPage from './pages/Login';
import { AuthContext, authState } from './context/Auth';

const App = () => {  
  const {setAuth, auth} = authState();
  useEffect(() => {
    return updateStateAuth();
    
    //if(loggedIn()) setAuth({isAuth: true});
  });
  console.log(auth);
  
  const updateStateAuth = () => setAuth({isAuth: true});
  return (
    <Router history={history}>
      <AuthContext.Provider value={authState()}>         
        <NavBar />
        <Route path="/login/" component={LoginPage} />
        <Route path="/game/" component={GamePage} />
      </AuthContext.Provider>
    </Router>
  );
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

export default App;
