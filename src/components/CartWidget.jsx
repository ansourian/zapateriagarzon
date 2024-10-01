import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartWidget() {

  const [cart] = useContext(CartContext);

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">{cart.length}</span>
    </div>
  );
}