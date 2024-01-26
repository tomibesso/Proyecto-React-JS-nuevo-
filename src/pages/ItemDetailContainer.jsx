import Card from "react-bootstrap/Card";
import { useGetProductById } from "../hooks/useProducts";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount";
export const ItemDetailContainer = () => {

  const { id } = useParams()

  const {productData} = useGetProductById("products", id)
  
  return (
    <Card key={productData.id} style={{ width: "18rem", margin: "auto", marginTop: "25px" }}>
      <Card.Img variant="top" src={productData.thumbnail} />

      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
        <div>{productData.price}</div>
        <ItemCount           
          productId={productData.id}
          productName={productData.title}
          productPrice={productData.price}
          productImage={productData.thumbnail}
          productDescription={productData.description} />
        <div style={{display: "flex", justifyContent: "center", marginTop: "5px"}}><Link to={`/update-product/${productData.id}`} >Editar producto</Link></div>
      </Card.Body>
    </Card>
  );
};