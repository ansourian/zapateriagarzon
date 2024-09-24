import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";

export default function Producto() {
  const [product, setProduct] = useState({})
  const { id } = useParams();

  useEffect(() => {
    setProduct(getProduct(id))
  }, []);

  return (
    <>
      <article>
        <h2>Product Detail</h2>
        <h4>{product.title} - {product.category}</h4>
        <img></img>
        <p>Description: {product.description}</p>
        <p>$ {product.price}</p>
      </article>
    </>
  );
}
