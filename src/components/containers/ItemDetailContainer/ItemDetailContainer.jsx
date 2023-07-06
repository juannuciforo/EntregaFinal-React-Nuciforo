import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { getProductsById } from "../../../asyncMock";
import { ItemDetail } from "../../commons/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getDoc, doc } from 'firebase/firestore'
import { db } from "../../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'productos', itemId)

    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data}
        setProduct(productAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [itemId])

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
