import './App.css'
import NavBar from './components/Navbar';
import ModelCategories from './components/ModelCategories';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Zapateria Garzon!" />
      <ModelCategories />
    </>
  )
}

export default App;
