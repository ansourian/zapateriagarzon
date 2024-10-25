import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ProductCardInCart from "../../components/ProductCardInCart";
import "./cart.css"
import AddOrders from "../../components/AddOrders";

export default function Cart() {
  const [cart] = useContext(CartContext);

  const calcularTotal = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.cantidad,
      0
    );
  };

  return (
    <main>
      <h2>Carrito</h2>
      <hr className="linea-subtitulo"></hr>
      <p className="p-sub">
        Acá podes visualizar los productos que tenes agregados al carrito
      </p>
      <hr></hr>
      {cart.length ? (
        cart.map((e) => <ProductCardInCart key={e.id} product={e} />)
      ) : (
        <p>No hay productos en tu carrito.</p>
      )}
      {cart.length > 0 && (
        <div className="div-cart_total">
          <div></div>
          <div className="cart-total">
            <h3>Total: ${calcularTotal().toFixed(2)}</h3>
            <AddOrders />
          </div>
        </div>
      )}
    </main>
  );
}
