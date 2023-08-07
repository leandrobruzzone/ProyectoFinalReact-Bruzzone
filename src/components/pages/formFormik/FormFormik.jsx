import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const FormFormik = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { cart, getTotalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      repet: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total,
        date: serverTimestamp(),
      };
      let ordersCollections = collection(db, "orders");
      addDoc(ordersCollections, order).then((res) => setOrderId(res.id));

      cart.forEach((elemento) => {
        updateDoc(doc(db, "products", elemento.id), {
          stock: elemento.stock - elemento.quantity,
        });
      });
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(6, "Debe contener al menos 6 caracteres")
        .max(15, "No puede contener mas de 15 caracteres"),
      email: Yup.string()
        .email("No corresponde a un email valido")
        .required("Este campo es obligatorio"),
      phone: Yup.string()
        .required("Este campo es obligatorio")
        .min(8, "No corresponde a un teléfono válido"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^(?=.*\d)(?=.*[A-Z]).{6,15}$/, {
          message:
            "Debe contener entre 6 y 15 caracteres, un número y una mayúscula",
        }),
      repet: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

  return (
    <div style={{ padding: "60px 600px" }}>
      {!orderId ? (
        <form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center" }}>Termine su compra</h1>
          <TextField
            fullWidth
            type="text"
            label="Nombre"
            variant="outlined"
            name="name"
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
          />
          <TextField
            fullWidth
            type="text"
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            type="text"
            label="Teléfono"
            variant="outlined"
            name="phone"
            onChange={handleChange}
            error={errors.phone ? true : false}
            helperText={errors.phone}
          />
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            label="Contraseña"
            variant="outlined"
            name="password"
            onChange={handleChange}
            error={errors.password ? true : false}
            helperText={errors.password}
          />
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            label="Repetir contraseña"
            variant="outlined"
            name="repet"
            onChange={handleChange}
            error={errors.repet ? true : false}
            helperText={errors.repet}
          />

          <Button
            fullWidth
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            Mostrar/ocultar
          </Button>

          <Button fullWidth type="submit" variant="contained">
            Enviar
          </Button>
        </form>
      ) : (
        <h1 style={{ textAlign: "center" }}>
          Su orden de compra es: {orderId}
        </h1>
      )}
    </div>
  );
};

export default FormFormik;
