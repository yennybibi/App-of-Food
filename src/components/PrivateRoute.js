
import React from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ component: Component, token, ...rest }) => {
  const isAuthenticated = token !== null;

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
