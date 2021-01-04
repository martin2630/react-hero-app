import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRouter } from './PrivateRouter';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const { user: { logged } } = useContext(AuthContext);

  return (
    <Router>
      <div>

        <Switch>
          <PublicRoute
            exact 
            path="/login" 
            component={ LoginScreen } 
            isAuthenticated={ logged } 
          />
          <PrivateRouter
            path="/" 
            component={ DashboardRoutes } 
            isAuthenticated={ logged } 
          />
          {/* <Route path="/" component={ DashboardRoutes } /> */}
        </Switch>

      </div>
    </Router>
  );
}
