import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../../contexts/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cart, clearCart, totalQuantity, totalValue, updateStock } = useContext(CartContext);

  const handleClearCart = () => {
    cart.forEach(item => {
      updateStock(item.id, item.quantity); // Actualizar el stock con la cantidad de los artículos eliminados del carrito
    });
    clearCart();
  };

  if (totalQuantity === 0) {
    return (
      <div>
        <h1 className='text-center item-info'>No hay items en el carrito</h1>
        <Link to='/' className='product-link'>Productos</Link>
      </div>
    );
  }

  return (
    <div className='Cart'>
      {cart.map(p => <CartItem key={p.id} {...p} />)}
      <h3>Total: ${totalValue().toFixed(2)}</h3>
      <button onClick={handleClearCart} className='Button'>Limpiar carrito</button>
      <Link to='/checkout' className='Option'>Checkout</Link>
    </div>
  );
};
