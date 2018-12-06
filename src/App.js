import React, { useEffect, useState } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import history from './history';
import { AuthContext } from  './AuthContext';
import LoginPage from './pages/Login'; 
const App = () => {    
    const [auth, setAuth] = useState({isAuth: false});
    useEffect(() => {
        if(localStorage.getItem('token')) {
            setAuth({isAuth: true});
        }        
    }, []);    
    return (
        <Router history={history}>  
            <AuthContext.Provider value={auth}>
                <LoginPage></LoginPage>
            </AuthContext.Provider>     
        </Router>
    );
}

export default App;