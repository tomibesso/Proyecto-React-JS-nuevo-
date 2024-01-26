import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { count } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito</h2>
      {count.length < 1 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {count.map((item) => (
            <li key={item.id}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Descripción: {item.description}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio por unidad: ${item.price}</p>
                  <p>Precio total: ${item.price * item.quantity}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
