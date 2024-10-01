import { createContext, useEffect, useState, useContext } from "react";
import { getProducts } from "../asyncMock";

export const ProductsContext = createContext(false);

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => setProducts(data));
    }, []);

    return (
        <ProductsContext.Provider value={[products, setProducts]}>
            {children}
        </ProductsContext.Provider>
    );
}
