import ItemListContainer from "../../components/ItemListContainer";
import ModelCategories from "../../components/ModelCategories";
import ProductsList from "../../components/ProductsList";

export default function Home() {
  return (
    <main>
      <ItemListContainer greeting="¡Bienvenido a Zapateria Garzon!" />
      <ModelCategories />
    </main>
  );
}
