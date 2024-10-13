import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { FaShoppingCart } from "react-icons/fa"
import "./CartWidget.css"
import { Link } from "react-router-dom"

export default function CartWidget({link}) {
  const [cart] = useContext(CartContext)

  return (
    <Link to={link}>
      <div className="cart-widget">
        <FaShoppingCart className="cart-icon" />
        <span className="cart-count">{cart.length}</span>
      </div>
    </Link>
  )
}
