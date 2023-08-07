import CounterContainer from "../../common/Counter/CounterContainer";

const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "90px",
      }}
    >
      <h1 style={{ fontSize: "45px" }}>{product.title}</h1>
      <img src={product.img} style={{ height: "600px" }} />
      <p
        style={{
          fontSize: "21px",
          paddingLeft: "120px",
          paddingRight: "120px",
          textAlign: "justify",
        }}
      >
        {product.description}
      </p>
      <h3 style={{ fontSize: "39px", paddingTop: "30px" }}>
        Precio: ${product.price}
      </h3>
      <h4 style={{ fontSize: "21px", padding: "30px" }}>
        Stock: {product.stock}
      </h4>
      <CounterContainer
        cantidadEnCarrito={cantidadEnCarrito}
        stock={product.stock}
        agregarAlCarrito={agregarAlCarrito}
      />
    </div>
  );
};

export default ItemDetail;
