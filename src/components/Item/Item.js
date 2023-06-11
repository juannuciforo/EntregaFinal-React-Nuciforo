import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, description, price, stock }) => {
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
        <Link to={`/item/${id}`} className="option btn btn-primary">
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
