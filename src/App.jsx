import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import NavBar from "./components/commons/layout/NavBar";
import ItemDetailContainer from "./components/containers/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/containers/ItemListContainer/ItemListContainer";
import { CartProvider } from './contexts/CartContext'
import { Cart } from './components/commons/Cart/Cart'
import Checkout from './components/commons/Checkout/Checkout.js'

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function ItemListWrapper() {
  const { categoryId } = useParams();
  const title = categoryId ? `${capitalizeFirstLetter(categoryId)}` : "Todos los artículos";

  return (
    <div style={{ textAlign: "center", paddingTop: "10px" }}>
      <h1 style={{ fontSize: "24px" }}>{title}</h1>
      <ItemListContainer categoryId={categoryId} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListWrapper />} />
            <Route path="/category/:categoryId" element={<ItemListWrapper />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} /> 
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
