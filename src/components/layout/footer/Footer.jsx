import "./Footer.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="footer">
      <span>© CoderShopStore. 2023 Todos los derechos reservados</span>
      <ul>
        <h3>Contactanos</h3>
        <li>
          <p>
            Email: <a href="">CoderShopStore@gmail.com</a>
          </p>
        </li>
        <li>
          <p>
            Teléfono: <a href="">0800-333-3333</a>
          </p>
        </li>
      </ul>
      <a href="">
        <WhatsAppIcon sx={{ fontSize: 45 }} />
      </a>
    </div>
  );
};

export default Footer;
