import React, { useEffect, useState, useRef } from "react";
import { Route, Outlet } from "react-router-dom";
import { useNavigate } from "react-router";
import { loadToken } from "../services/auth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const initialRender = useRef(true);

  useEffect(() => {
    const token = loadToken();
    setIsAuthenticated(!!token);

    if (!token && initialRender.current) {
      alert("You must be logged in to view this page");
      navigate("/sign-in", { replace: true });
    }

    initialRender.current = false;
  }, [navigate]);

  if (isAuthenticated) {
    return <Component {...rest} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
