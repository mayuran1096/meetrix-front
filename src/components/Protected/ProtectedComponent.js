import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedComponent = ({ component: RenderComponent, ...rest }) => {
  console.log(RenderComponent);
  console.log(rest);
  let hashToken = JSON.parse(localStorage.getItem("auth-xyder-admeen"));
  return (
    <Route
      {...rest}
      render={(props) => {
        return hashToken !== null ? (
          <RenderComponent {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedComponent;
