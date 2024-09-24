import ButtonComponent from "./ButtonComponent";
import CartWidget from "./CartWidget";
import "../components/NavBar.css";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <h1 className="h1-navbar">ZAPATERÍA GARZON</h1>
      <div className="buttons-navbar">
        <ButtonComponent title="Home" link={"/"} />
        <ButtonComponent title="Productos" link={"/productos"} />
        <ButtonComponent title="Contacto" link={"/contacto"} />
        <ButtonComponent title="Acerca de Nosotros" link={"/acerca_de"} />
      </div>
      <CartWidget />
    </div>
  );
}
