import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context/auth"; 

function PrivateRoute({ component: Component, ...rest }) {
 
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", 
            state: {from: props.location}
                }}
          />
          
        )
      }
    />
  );
}

export default PrivateRoute;