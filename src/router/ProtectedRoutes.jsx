import { Outlet, Navigate } from "react-router";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";

const ProtectedRoutes = () => {
  let userRol = "user";
  return (
    <div>
      <Navbar />
      {userRol === "admin" ? <Outlet /> : <Navigate to="/" />}
      <Footer />
    </div>
  );
};

export default ProtectedRoutes;
