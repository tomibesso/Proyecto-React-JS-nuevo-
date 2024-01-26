import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { count } = useContext(CartContext);

  return (
    <div>
      <h2 style={{textAlign: "center"}}>Carrito</h2>
      {count.length < 1 ? (
        <p style={{textAlign: "center"}}>El carrito está vacío</p>
      ) : (
        <ul style={{listStyleType: "none"}}>
          {count.map((item) => (
            <li style={{margin: "10px"}} key={item.id}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={item.image} alt={item.name} style={{ width: "300px", height: "200px", marginRight: "10px" }} />
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
