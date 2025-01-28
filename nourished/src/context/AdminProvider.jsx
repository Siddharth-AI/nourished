import React, { createContext, useEffect, useState } from "react";
import { getServices } from "../services/service";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    const adminState = localStorage.getItem("admin");
    return adminState ? JSON.parse(adminState) : false;
  });
  useEffect(() => {
    localStorage.setItem("admin", JSON.stringify(admin));
  }, [admin]);

  const [loginData, setLoginData] = useState([]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await getServices("auth");
        setLoginData(data);
      } catch (error) {
        console.log("Error when checking authorization", error);
      }
    };
    checkAuth();
  }, []);

  return (
    <AdminContext.Provider value={{ admin, setAdmin, loginData }}>
      {children}
    </AdminContext.Provider>
  );
};
