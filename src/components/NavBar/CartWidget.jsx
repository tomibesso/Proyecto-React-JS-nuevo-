import './CartWidget.css'
import { CartContext } from '../../context/CartContext';
import { useContext } from "react";

const CartWidget = () => {
    const { count } = useContext(CartContext);

    return (
        <div className='cartWidgetContainer'>
            🛒
            <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>{count}</span>
        </div>
    )
}

export default CartWidget;