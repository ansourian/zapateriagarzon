import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

export default function CartWidget() {
  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">3</span>
    </div>
  );
}