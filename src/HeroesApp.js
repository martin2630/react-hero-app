import React, { useReducer, useEffect } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authRecucer } from './auth/authRecucer';

export const HeroesApp = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("user")) || {
      logged: false
    }
  }
  const [user, dispatch] = useReducer(authRecucer, {}, init)

  useEffect(() => {
    localStorage.setItem( "user", JSON.stringify(user) );
  }, [user])

  return (
    <AuthContext.Provider value={ {user, dispatch} }>
      <AppRouter />
    </AuthContext.Provider>
  )
  
}
