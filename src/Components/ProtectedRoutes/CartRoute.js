import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthContext } from "../ContextApi/ContextApi";

export default function CartRoute({ children }) {
  console.log("Protected Route");
  const { isAuthenticated } = useCreateAuthContext();
  console.log("Cart Route: " + isAuthenticated);
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
  return children;
}
