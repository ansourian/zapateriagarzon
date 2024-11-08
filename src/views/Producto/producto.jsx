import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./producto.css"
import { CartContext } from "../../context/CartContext"
import { getSingleProduct } from "../../firebase/firebase"
import { ProductImages } from "../../ImageRepository"
import { FaMinus, FaPlus } from "react-icons/fa"

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const [addProductCount, setAddProductCount] = useState(1)
  const [productImg, setProductImg] = useState()
  const { id } = useParams()

  useEffect(() => {
    getSingleProduct(id).then((prod) => {
      setProduct(prod)
      if (prod) setProductImg(ProductImages[id])
    })
  }, [])

  const handleClick = () => {
    addItem(product, addProductCount)
  }

  const [, , addItem, removeItem] = useContext(CartContext)

  const handleSubstractCount = () => {
    let newCount = addProductCount - 1
    if (newCount < 1) newCount = 1
    setAddProductCount(newCount)
  }

  const handleAddCount = () => {
    setAddProductCount(addProductCount + 1)
  }

  return (
    <>
      <article className="article-detail">
        <div>
          <img className="img-detail" src={productImg} alt={product.title} />
        </div>
        <div>
          <div>
            <h2 className="h2-detail">{product.title}</h2>
            <h3 className="h3-detail">{product.style}</h3>
          </div>
          <div className="div-info">
            <p className="p-title">Descripción:</p>
            <p className="p-info">{product.description}</p>
            <p className="p-title">Precio:</p>
            <p className="p-info">{product.price}</p>
            <p className="p-title">Color:</p>
            <p className="p-info">{product.color}</p>
            <p className="p-title">Tipo de cuero:</p>
            <p className="p-info">{product.cuero}</p>
            <div className="div-button_cart_container">
              <div></div>
              <div className="quantity-controls">
                <button
                  className="button-product"
                  onClick={handleSubstractCount}
                >
                  <FaMinus />
                </button>
                <span className="p-info">{addProductCount}</span>
                <button className="button-product" onClick={handleAddCount}>
                  <FaPlus />
                </button>
              </div>

              <div className="div-button_cart">
                <button className="button-product2" onClick={handleClick}>
                  AGREGAR AL CARRITO
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
