import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let limpiar = () => {
    Swal.fire({
      title: "¿Seguro quieres eliminar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado con exito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Puedes continuar con tu compra", "", "info");
      }
    });
  };

  let total = getTotalPrice();
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
      }}
    >
      <h1 style={{ marginTop: 15, fontSize: "60px" }}>Carrito de compras</h1>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {cart.map((elemento) => (
          <div
            key={elemento.id}
            style={{
              width: "200px",
              border: "6px solid #1877f2",
              padding: 15,
              borderRadius: 9,
              margin: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={elemento.img} style={{ height: "120px" }} />
            <h3 style={{ fontSize: "15px", color: "#757575" }}>
              {elemento.title}
            </h3>
            <h3 style={{ fontSize: "27px" }}>${elemento.price}</h3>
            <h4 style={{ fontSize: "21px" }}>Cantidad: {elemento.quantity}</h4>
            <Button variant="contained" onClick={() => deleteById(elemento.id)}>
              Eliminar
            </Button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <Button
            variant="outlined"
            onClick={limpiar}
            style={{ marginRight: 10 }}
          >
            Limpiar carrito
          </Button>
          <Link to="/checkout">
            <Button variant="outlined">Terminar compra</Button>
          </Link>
        </div>
      )}

      <h2 style={{ marginTop: 30, fontSize: "30px" }}>
        El total del carrito es : {total}{" "}
      </h2>
    </div>
  );
};

export default CartContainer;
