import { Link } from "react-router-dom"
import "../components/ProductCard.css"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { getProducts, getSingleProduct } from "../firebase/firebase"
import { ProductImages } from "../ImageRepository"

export default function ProductCard({ product }) {
  const [, , addItem] = useContext(CartContext)

  const handleClick = () => {
    addItem(product)
  }

  const productImg = ProductImages[product.id];

  return (
    <>
      <article className="article-product" key={product.id}>
        {productImg && <img className="img-product" src={productImg} alt={product.title} />}
        <h3 className="h3-product">{product.title}</h3>
        <p className="p-product">Estilo: {product.style}</p>
        <p className="p-product">${product.price}</p>
        <div className="div-card_buttons">
          <button className="button-product">
            <Link className="link-button" to={`/producto/${product.id}`}>
              VER MODELO
            </Link>
          </button>
        </div>
      </article>
    </>
  )
}
