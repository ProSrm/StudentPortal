import React from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

export function RequireAuth({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  if (!auth.user) {
    return (
      <Navigate to="/login" state={{ path: location.pathname }}></Navigate>
    );
  }
  return children;
}
