// import { useEffect, useState } from 'react';
// import { getProducts } from '../asyncMock.js';
// import ProductCard from './ProductCard';
// import "../components/ProductsList.css";

// export default function ProductsList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts.then((data) => setProducts(data));
//   }, []);

//   return (
//     <>
//       <section className='section-products'>
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </section>
//     </>
//   );
// }

import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function ProductsList() {
  const [products, setProducts] = useContext(ProductsContext);


  return (
    <>
      <section>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}
