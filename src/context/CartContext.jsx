import { createContext, useState } from "react"

export const CartContext = createContext([])

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  };

  const addItem = (item) => {
    if (isInCart(item.id)) {
      setCart(cart.map(product =>
        product.id === item.id
          ? { ...product, cantidad: product.cantidad + 1 }
          : product
      ));
    } else {
      setCart([...cart, { ...item, cantidad: 1 }]);
    }
  };

  const removeItem = (productId) => {
    const product = cart.find(item => item.id === productId);
    if (product.cantidad > 1) {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== productId));
    }
  };
  
  return (
    <CartContext.Provider value={[cart, setCart, addItem, removeItem]}>
      {children}
    </CartContext.Provider>
  )
}
