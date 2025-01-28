import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const adminState = localStorage.getItem("admin");
  return adminState === "true" ? <Outlet /> : <Navigate to="/login" />;
};
