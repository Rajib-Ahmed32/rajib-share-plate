import React from "react";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/ui/Loading";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  useEffect(() => {
    if (!loading && !user) {
      toast.success(
        "Please login or register first before accessing this page"
      );
    }
  }, [loading, user]);

  if (loading) {
    return <Loading />;
  }

  return user ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
