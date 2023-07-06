import React, { useContext } from 'react';
import './CartItem.css';
import { CartContext } from '../../../contexts/CartContext';

const CartItem = ({ id, name, price, quantity }) => {
  const { removeItem, stock, updateStock } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(id);
    updateStock(id, stock[id] + quantity); // Restaura el stock del artículo eliminado
  };

  return (
    <div className="cart-item row align-items-center">
      <div className="col">{name}</div>
      <div className="col">Precio: ${price}</div>
      <div className="col">Cantidad: {quantity}</div>
      <div className="col">
        <button className="btn btn-danger" onClick={handleRemoveItem}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
