import "../components/ModelCategories.css";
import CardCategories from "./CardCategories";

export default function ModelCategories() {
  return (
    <div className="model-categories_container">
      <CardCategories title={"Listos para Usar"}></CardCategories>
      <CardCategories title={"Hecho a Pedido"}></CardCategories>
      <CardCategories title={"Personalizados a Medida"}></CardCategories>
    </div>
  );
}
