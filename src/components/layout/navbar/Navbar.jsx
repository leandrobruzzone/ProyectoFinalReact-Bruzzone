import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={"containerNavbar"}>
        <Link to="/" style={{color: "white"}}>Inicio</Link>
        <ul className="categories">
          <Link to="/category/celulares">Celulares</Link>
          <Link to="/category/notebooks">Notebooks</Link>
          <Link to="/category/tablets">Tablets</Link>
        </ul>
        <CartWidget />
      </div>
     <Outlet />
    </div>
  );
};

export default Navbar;