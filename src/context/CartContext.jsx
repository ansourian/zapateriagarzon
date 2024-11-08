import { createContext, useState } from "react"

export const CartContext = createContext([])

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  const addItem = (item, cantidad = 1) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? { ...product, cantidad: product.cantidad + cantidad }
            : product
        )
      )
    } else {
      setCart([...cart, { ...item, cantidad }])
    }
  }

  const removeItem = (productId, cantidad = 1) => {
    const product = cart.find((item) => item.id === productId)
    if (product.cantidad > cantidad) {
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, cantidad: item.cantidad - cantidad }
            : item
        )
      )
    } else {
      setCart(cart.filter((item) => item.id !== productId))
    }
  }

  return (
    <CartContext.Provider value={[cart, setCart, addItem, removeItem]}>
      {children}
    </CartContext.Provider>
  )
}
