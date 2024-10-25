import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { sendOrder } from '../firebase/firebase';
import "./AddOrders.css"


export default function AddOrders() {
  const [cart] = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const handleClick = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    const total = cart.reduce((acc, product) => acc + product.price * product.cantidad, 0);

    const newOrder = {
      buyer: {
        email: 'josegutierrez@gmail.com',
        name: 'Jose Gutierrez',
        phone: '+5491132534833',
      },
      date: new Date(),
      items: cart.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
        cantidad: product.cantidad
      })),
      total: total,
    };
    sendOrder(newOrder).then((id) => setOrderId(id));
  };

  return (
    <>
      <button className="button-product" onClick={handleClick}>Generar Orden</button>
      {orderId && <p className="p-orden">Orden generada: {orderId}</p>}
    </>
  );
}
