import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "./ProductCard";
import "../components/ProductsList.css";

export default function ProductsList() {
  const [products, setProducts] = useContext(ProductsContext);


  return (
    <>
      <section className="section-products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}
