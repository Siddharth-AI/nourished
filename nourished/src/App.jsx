import "./App.css";
import { Home } from "./pages/Home";
import Navbar from "./pages/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import Blog from "./pages/Blog";
import Features from "./pages/Features";
import DashboardNavbar from "./components/dashboard/DashboardNavbar";
import AddProducts from "./components/dashboard/AddProducts";
import ManageProducts from "./components/dashboard/ManageProducts";
import View from "./components/dashboard/View";
import EditProduct from "./components/dashboard/EditProduct";
import { ProtectedRoute } from "./components/ProtectedRoute";
import DashboardHome from "./components/dashboard/DashboardHome";
import { useContext } from "react";
import { AdminContext } from "./context/AdminProvider";

function App() {
  const { admin } = useContext(AdminContext);
  return (
    <BrowserRouter>
      {admin ? <DashboardNavbar /> : <Navbar />}
      <Routes>
        {/* unauthorized routes */}

        {!admin && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/features" element={<Features />} />
            <Route path="/blog" element={<Blog />} />
          </>
        )}

        {/* global for both admin and user */}
        <Route path="/view/:id" element={<View />} />

        {/* protected routes */}

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/add-product" element={<AddProducts />} />
          <Route path="/manage-product" element={<ManageProducts />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          {/* <Route path="/view/:id" element={<View />} /> */}
        </Route>

        {/* redirect unauthorized access  */}

        <Route
          path="*"
          element={<Navigate to={admin ? "/dashboard" : "/"} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
