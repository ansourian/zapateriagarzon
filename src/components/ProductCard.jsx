import { Link } from "react-router-dom"
import "../components/ProductCard.css"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { getProducts, getSingleProduct } from "../firebase/firebase"

export default function ProductCard({ product }) {
  // const [myProds, setMyProds] = useState([]);
  /* const [singleProd, setSingleProd] = useState(null); */

  // useEffect(() => {
  /* getSingleProduct('ZjkF4RdijYUaR3gseS30').then((response) =>
      setSingleProd(response)
    ); */
  // getProducts().then((products) => setMyProds(products));
  /* filterProductsByPrice(1500).then((products) => setMyProds(products)); */
  // }, []);

  const [, , addItem] = useContext(CartContext)

  const handleClick = () => {
    addItem(product)
  }

  return (
    <>
      <article className="article-product" key={product.id}>
        <h3 className="h3-product">{product.title}</h3>
        <p className="p-product">Precio ${product.price}</p>
        <p className="p-product">Estilo: {product.style}</p>
        <div className="div-card_buttons">
          <button className="button-product">
            <Link className="link-button" to={`/producto/${product.id}`}>
              VER MODELO
            </Link>
          </button>
          <button className="button-product" onClick={handleClick}>
            AGREGAR AL CARRITO
          </button>
        </div>
      </article>
      {/* {myProds &&
        myProds.map((prod) => (
          <article className="article-product" key={prod.id}>
            <h3 className="h3-product">{prod.title}</h3>
            <p className="p-product">Precio ${prod.price}</p>
            <p className="p-product">Estilo: {prod.style}</p>
            <div className="div-card_buttons">
              <button className="button-product">
                <Link className="link-button" to={`/producto/${product.id}`}>
                  VER MODELO
                </Link>
              </button>
              <button className="button-product" onClick={handleClick}>
                AGREGAR AL CARRITO
              </button>
            </div>
          </article>
        ))} */}
      {/* <button onClick={handleUpdate}>Actualizar producto</button> */}
    </>
  )
}
