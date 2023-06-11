import "./ItemDetail.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

const ItemDetail = ({ id, name, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
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
          Stock disponible: {stock} unidades
        </p>
      </section>
      <footer className="item-footer card-footer">
        {quantityAdded > 0 ? (
          <link to="/cart" className="Option">
            Terminar compra
          </link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
