import React from 'react';

export const AuthContext = React.createContext();

export const authState = {
    isAuth: false
};

export const reducer = (state, action) => {    
    switch (action.type) {
      case 'AUTH_SUCCESS':console.log(authState);
        return authState.isAuth = true;
      case 'AUTH_REQUEST':
        return {isAuth: false};
      case 'AUTH_FAILURE':
        return {count: state.count - 1};
      default:
        return state;
    }
  }