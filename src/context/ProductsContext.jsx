import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext(false);

export function ProductsProvider({children}){
    const [products, setProducts] = useState([]);

    useEffect(()=>{

    },[]);

    return(
        <ProductsContext.Provider>
            {children}
        </ProductsContext.Provider>
    )
}