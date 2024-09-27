import ButtonComponent from "./ButtonComponent";
import CartWidget from "./CartWidget";
import "../components/NavBar.css";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <h1 className="h1-navbar">ZAPATERÍA GARZON</h1>
      <div className="buttons-navbar">
        <ButtonComponent title="HOME" link={"/"} />
        <ButtonComponent title="PRODUCTOS" link={"/productos"} />
        <ButtonComponent title="CONTACTO" link={"/contacto"} />
        <ButtonComponent title="ACERCA DE" link={"/acerca_de"} />
      </div>
      <CartWidget />
    </div>
  );
}
