import { useContext, React } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";

const Item = ({ id, name, description, price, stock }) => {
  const { cart } = useContext(CartContext);

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
        <Link to={`/item/${id}`} className="option btn btn-primary">
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
