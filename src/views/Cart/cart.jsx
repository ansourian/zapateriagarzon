import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export default function Cart() {
  const [cart] = useContext(CartContext)
  return (
    <main>
      <h2>Carrito</h2>
      <hr className="linea-subtitulo"></hr>
      <p className="p-sub">
        Acá podes visualizar los productos que tenes agregados al carrito
      </p>
      <hr></hr>
      {cart.length ? cart.map((e)=> <p>{e.title}</p>) : <p>No hay productos en tu carrito.</p>}
    </main>
  )
}
