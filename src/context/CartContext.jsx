import { createContext, useState } from "react"

export const CartContext = createContext([])

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  // const addItem = (item) => {
  //   setCart([...cart, item])
  // }

  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  };

  const addItem = (item) => {
    if (!isInCart(item.id)) {
      setCart([...cart, item]);
    } else {
      console.log("El item ya está en el carrito");
    }
  };
  
  return (
    <CartContext.Provider value={[cart, setCart, addItem]}>
      {children}
    </CartContext.Provider>
  )
}
