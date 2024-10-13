import "./App.css"
import NavBar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home/Home"
import Contacto from "./views/Contacto/contacto"
import AcercaDe from "./views/Acerca_de/Acerca_de"
import ItemDetailContainer from "./views/Producto/producto"
import ItemListContainer from "./views/Productos/productos"
import { ProductsProvider } from "./context/ProductsContext"
import { CartProvider } from "./context/CartContext"
import Cart from "./views/Cart/cart"

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route
                exact
                path="/productos"
                element={<ItemListContainer />}
              ></Route>
              <Route exact path="/contacto" element={<Contacto />}></Route>
              <Route exact path="/acerca_de" element={<AcercaDe />}></Route>
              <Route exact path="/cart" element={<Cart />}></Route>
              <Route
                exact
                path="/producto/:id"
                element={<ItemDetailContainer />}
              ></Route>
            </Routes>
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>
    </>
  )
}

export default App
