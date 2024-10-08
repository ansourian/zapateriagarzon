import { Link } from "react-router-dom"
import "../components/ProductCard.css"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function ProductCard({ product }) {
  const [, , addItem] = useContext(CartContext)

  const handleClick = () => {
    addItem(product)
  }

  return (
    <>
      <article className="article-product">
        <h3 className="h3-product">{product.title}</h3>
        <img className="img-product" src={product.image} alt={product.title} />
        <p className="p-product">Estilo: {product.category}</p>
        <p className="p-product">{product.price}</p>
        <button className="button-product">
          {" "}
          <Link className="link-button" to={`/producto/${product.id}`}>
            VER MODELO
          </Link>
        </button>
        <button className="button-product" onClick={handleClick}>
          AGREGAR AL CARRITO
        </button>
      </article>
    </>
  )
}
