import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { sendOrder } from "../firebase/firebase"
import "./AddOrders.css"

export default function AddOrders() {
  const [cart, setCart] = useContext(CartContext)
  const [orderId, setOrderId] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [buyerName, setBuyerName] = useState("")
  const [buyerEmail, setBuyerEmail] = useState("")
  const [buyerPhone, setBuyerPhone] = useState("")

  const handleClick = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío")
      return
    }
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    if(orderId) setCart([])
  }

  function generateOrder(event) {
    event.preventDefault()
    const total = cart.reduce(
      (acc, product) => acc + product.price * product.cantidad,
      0
    )

    const newOrder = {
      buyer: {
        email: buyerEmail,
        name: buyerName,
        phone: buyerPhone,
      },
      date: new Date(),
      items: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        cantidad: product.cantidad,
      })),
      total: total,
    }
    sendOrder(newOrder).then((id) => setOrderId(id))
  }
    
  return (
    <>
      <button className="button-product" onClick={handleClick}>
        Generar Orden
      </button>
      {showModal && (
        <div className="modal">
          {!orderId ? (
            <div className="modal-content">
              <h2>Formulario de Contacto</h2>
              <form onSubmit={generateOrder}>
                <label className="p-info">
                  Nombre:
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                  />
                </label>
                <label className="p-info">
                  Mail:
                  <input
                    type="email"
                    name="mail"
                    required
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                  />
                </label>
                <label className="p-info">
                  Teléfono:
                  <input
                    type="tel"
                    name="telefono"
                    required
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                  />
                </label>
                <button className="button-product-modal" type="submit">
                  Confirmar Orden
                </button>
              </form>
              <button
                className="button-cerrar button-product-modal"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          ) : (
            <div className="modal-content">
              <p className="p-orden">Orden generada: {orderId}</p>
              <button
                className="button-cerrar button-product-modal"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
