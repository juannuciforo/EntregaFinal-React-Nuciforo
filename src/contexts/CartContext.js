import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [stock, setStock] = useState({}); // Estado del stock

  console.log(cart);

  const addItem = (item, quantity) => {
    const existingItem = cart.find((prod) => prod.id === item.id);
  
    if (existingItem) {
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return {
            ...prod,
            quantity: prod.quantity + quantity,
          };
        }
        return prod;
      });
      setCart(updatedCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };
  

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const updateStock = (itemId, newStock) => {
    setStock((prevStock) => ({
      ...prevStock,
      [itemId]: newStock,
    }));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId && prod.quantity > 0);
  };
  

  const totalValue = () => {
    return cart.reduce((total, prod) => total + prod.price * prod.quantity, 0);
  };

  const totalUnity = () => {
  if (cart.length === 0) {
    return 0;
  } else {
    return cart.reduce((total, prod) => total + prod.quantity, 0);
  }
};
  

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity: cart.length,
        totalUnity,
        totalValue,
        stock,
        updateStock, // Agregar la función para actualizar el stock al valor del contexto
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
