import { useCallback, useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";


export const ItemCount = () => {
    const [countItem, setCountItem] = useState(0);
    const { setCount } = useContext(CartContext);

    const handleAdd = () => {
        setCountItem(countItem + 1);
    }

    const handleRemove = () => {
        if (countItem > 0) {
            setCountItem(countItem - 1);
        }
    }

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            margin: 'auto'
        }}>
            <div style={{
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '50%',
                alignItems: 'center'
            }}>
                <Button onClick={handleRemove}>-</Button>
                <span style={{fontSize: '1.5em'}}>{countItem}</span>
                <Button onClick={handleAdd}>+</Button>
            </div>
            <Button onClick={() => setCount(countItem)}>Agregar al carrito</Button>
        </div>
    )
}