import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProducts] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getProductsById(itemId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
