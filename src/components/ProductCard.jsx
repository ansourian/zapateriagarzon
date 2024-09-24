import { Link } from "react-router-dom";
import "../components/ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <>
      <article className="article-product">
        <h3>{product.title}</h3>
        <img className="img-product" src={product.image} alt={product.title} />
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
        <button> <Link to={`/producto/${product.id}`}>Detalles</Link></button>
      </article>
    </>
  );
}
