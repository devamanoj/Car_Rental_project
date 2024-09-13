import React from "react";
import { Navigate } from "react-router-dom";

// This function simulates checking if the user is authenticated
const isAuthenticated = () => {
  // Example: checking for an auth token in localStorage
  const token = localStorage.getItem("authToken");
  return token !== null;
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/Signin" />;
};

export default ProtectedRoute;
