import React, { useEffect, useState, useContext } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';

import history from './history';
import { AuthContext } from  './context/AuthContext';
import { PlayerContext } from  './context/PlayerContext';
import { checkAuth } from './actions/AuthActions';
import NavBar from './components/layouts/NavBAr';

import LoginPage from './pages/LoginPage';
import GamePage from './pages/GamePage';  

const App = () => {    
    const [auth, setAuth] = useState({isAuth: false});
    const [player, setPlayer] = useState({});

    useEffect(() => {
      setAuth({isAuth: checkAuth()});       
    }, []);    

    return (
        <Router history={history}>  
            <AuthContext.Provider value={{auth, setAuth}}>
              <PlayerContext.Provider value={{player, setPlayer}}>
                <NavBar />
                <Route path="/login" component={LoginPage} />
                <PrivateRoute path="/game" component={GamePage} />
              </PlayerContext.Provider>
            </AuthContext.Provider>     
        </Router>
    );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(AuthContext);
  const isAuth = auth.isAuth;  
  
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
}

export default App;