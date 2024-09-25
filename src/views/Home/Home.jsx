import GreetingContainer from "../../components/GreetingContainer";
import ModelCategories from "../../components/ModelCategories";

export default function Home() {
  return (
    <main>
      <GreetingContainer greeting="¡Bienvenido a Zapateria Garzon!" />
      <ModelCategories />
    </main>
  );
}
