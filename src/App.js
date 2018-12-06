import React, { useEffect, useState } from 'react';
import { Router, Route } from 'react-router-dom';

import history from './history';
import { AuthContext } from  './AuthContext';
import NavBar from './components/layouts/NavBAr';
import LoginPage from './pages/LoginPage'; 

const App = () => {    
    const [auth, setAuth] = useState({isAuth: false});
    useEffect(() => {
        if(localStorage.getItem('token')) {
            setAuth({isAuth: true});
        }        
    }, []);    
    return (
        <Router history={history}>  
            <AuthContext.Provider value={{auth, setAuth}}>
                <NavBar />
                <Route path="/login" component={LoginPage} />
            </AuthContext.Provider>     
        </Router>
    );
}

export default App;