import React, { Component, FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface Props extends RouteProps {}

const PrivateRoute: FC<Props> = (props) => {
  const name = useSelector<{ username: string }>(({ username }) => username);
  return name ? <Route {...props} /> : <Redirect to="/" />;
};

export default PrivateRoute;
