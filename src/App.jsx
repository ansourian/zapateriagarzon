import "./App.css";
import NavBar from "./components/Navbar";
import ModelCategories from "./components/ModelCategories";
import ItemListContainer from "./components/ItemListContainer";
import ProductList from "./components/ProductsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Contacto from "./views/Contacto/contacto";
import AcercaDe from "./views/Acerca_de/Acerca_de";
import Productos from "./views/Productos/productos";
import Producto from "./views/Producto/producto";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/productos" element={<Productos></Productos>}></Route>
          <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route exact path="/acerca_de" element={<AcercaDe></AcercaDe>}></Route>
          <Route exact path="/producto/:id" element={<Producto></Producto>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
