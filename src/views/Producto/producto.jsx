import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";
import "./producto.css";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const { id } = useParams();

  useEffect(() => {
    setProduct(getProduct(id))
  }, []);

  return (
    <>
      <article className="article-detail">
        <div>
          <img className="img-detail" src={product.image} alt={product.title} />
        </div>
        <div>
          <div>
            <h2 className="h2-detail">{product.title}</h2>
            <h3 className="h3-detail">{product.category}</h3>
          </div>
          <div className="div-info">
            <p className="p-title">Descripción:</p>
            <p className="p-info">{product.description}</p>
            <p className="p-title">Precio:</p>
            <p className="p-info">{product.price}</p>
            <p className="p-title">Color:</p>
            <p className="p-info">{product.color}</p>
            <p className="p-title">Tipo de cuero:</p>
            <p className="p-info">{product.cuero}</p>
          </div>
        </div>
      </article>
    </>
  );
}
