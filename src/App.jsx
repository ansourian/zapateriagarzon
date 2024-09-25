import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Contacto from "./views/Contacto/contacto";
import AcercaDe from "./views/Acerca_de/Acerca_de";
import ItemDetailContainer from "./views/Producto/producto";
import ItemListContainer from "./views/Productos/productos";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/productos" element={<ItemListContainer></ItemListContainer>}></Route>
          <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route exact path="/acerca_de" element={<AcercaDe></AcercaDe>}></Route>
          <Route exact path="/producto/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
