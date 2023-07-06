import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../../asyncMock'
import ItemList from '../../commons/ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db} from '../../../services/firebase/firebaseConfig'

/* function ItemListContainer() {
  const location = useLocation();
  const categoriaUrl = location.pathname.split('/').pop(); // Obtiene el último segmento de la ruta como la categoría

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/data/productos.json');
        const data = await response.json();

        // Filtrar los productos por categoría
        const filteredItems = categoriaUrl
          ? data.filter((item) => item.categoria.toLowerCase() === categoriaUrl.toLowerCase())
          : data;

        setItems(filteredItems);
      } catch (error) {
        console.log('Error al obtener los productos:', error);
      }
    };

    fetchItems();
  }, [categoriaUrl]);

  return (
    <div className="item-list-container">
      <br />
      <h3>{categoriaUrl ? `Listado de productos (${categoriaUrl})` : 'Todos los productos'}</h3>
      <br />
      <br />
      <div className="item-list">
        {items.map((item) => (

          <div key={item.id} className="item-card linkWithoutFx">
            <Link className='linkWithoutFx' to={`/item/${item.id}`}>
            <h3>{item.nombre}</h3>
            <p>Descripción: {item.descripcion}</p>
            <p>Stock disponible: {item.stock}</p>
            <p>Precio: ${item.precio}</p>
            <p>Ver detalle</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} versión vieja sin separar el ItemlistContainer del ItemList */

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const collectionRef = categoryId
      ? query(collection(db, 'productos'), where('category', '==', categoryId))
      : collection(db, 'productos')

    getDocs(collectionRef)
      .then(response => {
        const productAdapted = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data}
          console.log(data)
        })
        setProducts(productAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
}, [categoryId])

  return (
    <div>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer;