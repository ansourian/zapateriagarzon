import { Link } from "react-router-dom"
import "../components/ProductCardInCart.css"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ProductImages } from "../ImageRepository"
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa"

export default function ProductCardInCart({ product }) {
  const [, , addItem, removeItem] = useContext(CartContext)

  const handleAddClick = () => {
    addItem(product)
  }

  const handleRemoveClick = () => {
    removeItem(product.id)
  }

  const handleRemoveAll = () => {
    removeItem(product.id, product.cantidad)
  }

  const productImg = ProductImages[product.id]

  return (
    <article className="article-product_cart" key={product.id}>
      <div className="div-product_information">
        <div>
          {ProductImages && (
            <img
              className="img-product_cart"
              src={productImg}
              alt={product.title}
            />
          )}
        </div>
        <div className="div-shoe_info">
          <h3 className="h3-product">{product.title}</h3>
          <p className="p-product_cart">Estilo: {product.style}</p>
          <p className="p-product_cart">Precio: ${product.price}</p>
        </div>
      </div>
      <div className="div-card_button">
        <div className="quantity-controls">
          <button className="button-product" onClick={handleRemoveClick}>
            <FaMinus />
          </button>
          <span>{product.cantidad}</span>
          <button className="button-product" onClick={handleAddClick}>
            <FaPlus />
          </button>
        </div>
        <button className="button-product">
          <Link className="link-button" to={`/producto/${product.id}`}>
            VER MODELO
          </Link>
        </button>
        <button className="button-product" onClick={handleRemoveAll}>
          <FaTrashAlt />
        </button>
      </div>
    </article>
  )
}
