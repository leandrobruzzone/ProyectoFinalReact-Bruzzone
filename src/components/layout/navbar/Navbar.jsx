import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navContainer">
      <h4>TecnoCoder</h4>
      <ul className="containerCategories">
        <li>Celulares</li>
        <li>Notebooks</li>
        <li>Tablets</li>
      </ul>
      <CartWidget />
    </div>
  );
};
export default Navbar;
