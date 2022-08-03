import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthContext } from "../ContextApi/ContextApi";

export default function CartRoute({ children }) {
  const { isAuthenticated } = useCreateAuthContext();
  if (isAuthenticated) {
    return <Navigate to="/cart" />;
  }
  return children;
}
