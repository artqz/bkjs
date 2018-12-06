import React, {createContext, useState} from 'react';

export const AuthContext = createContext();
export const authState = () => {
    const [auth, setAuth] = useState({
        isAuth: false
    });

    return { auth, setAuth };
}

