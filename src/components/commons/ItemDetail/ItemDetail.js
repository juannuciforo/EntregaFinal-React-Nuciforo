import "./ItemDetail.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";

export const ItemDetail = ({ id, name, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { cart, addItem, isInCart } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

  const getAvailableStock = () => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const availableStock = stock - cartItem.quantity;
      return availableStock >= 0 ? availableStock : "Sin Stock";
    } else {
      return stock > 0 ? stock : "Sin Stock";
    }
  };

  return (
    <article className="item-card card">
      <header className="card-header">
        <h2 className="item-header card-title">{name}</h2>
      </header>
      <section className="card-body">
        <h2 className="item-description card-text">{description}</h2>
        <p className="info-price card-text">Precio: ${price}</p>
        <p className="info-stock card-text">
          {getAvailableStock() === 0
            ? "Sin Stock"
            : `Stock disponible: ${getAvailableStock()} unidades`}
        </p>
      </section>
      <footer className="item-footer card-footer">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            Terminar compra
          </Link>
        ) : (
          <ItemCount
            initial={1}
            stock={getAvailableStock()}
            onAdd={handleOnAdd}
          />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
