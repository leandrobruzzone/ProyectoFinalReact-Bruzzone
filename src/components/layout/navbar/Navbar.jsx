import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  let userRol = "user";
  return (
    <div className={"containerNavbar"}>
      <Link to="/" className="logo">
        CoderShopStore
      </Link>
      <ul className="categories">
        <Link to="/category/celulares">Celulares</Link>
        <Link to="/category/notebooks">Notebooks</Link>
        <Link to="/category/tablets">Tablets</Link>
      </ul>
      {userRol === "admin" && (
        <Link to="/dashboard" className="adm">
          Administrador
        </Link>
      )}
      <CartWidget />
    </div>
  );
};

export default Navbar;
