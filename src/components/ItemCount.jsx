import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ productId, productName, productPrice, productImage, productDescription }) => {
  const [countItem, setCountItem] = useState(1);
  const { count, setCount } = useContext(CartContext);

  const handleAdd = () => {
    setCountItem(countItem + 1);
  };

  const handleRemove = () => {
    if (countItem > 0) {
      setCountItem(countItem - 1);
    }
  };

  const handleAddProductToCart = () => {
    const productExists = count.find((item) => item.id === productId);
  
    const newProduct = {
      id: productId,
      quantity: countItem,
      name: productName,
      price: productPrice,
      image: productImage,
      description: productDescription,
    };
  
    if (productExists) {
      setCount(
        count.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + countItem }
            : item
        )
      );
    } else {
      setCount([...count, newProduct]);
    }
  
    setCountItem(1);
  
    // Guardar en sessionStorage
    sessionStorage.setItem("cart", JSON.stringify([...count, newProduct]));
  };
  

  return (
    <div>
      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <Button onClick={handleRemove}>-</Button>
        <span>{countItem}</span>
        <Button onClick={handleAdd}>+</Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
        {/* Utiliza los datos del producto */}
        <Button onClick={handleAddProductToCart}>Agregar al Carrito</Button>
      </div>
    </div>
  );
};

export default ItemCount;
