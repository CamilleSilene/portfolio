import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

import { APP_ROUTES } from "../constants";

const PrivateRoute = () => {
  const user = useAuth();
  if (!user.token) return <Navigate to={APP_ROUTES.LOGIN}/>;
  return <Outlet />;
};

export default PrivateRoute;
