import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

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
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListWrapper />} />
        <Route path="/category/:categoryId" element={<ItemListWrapper />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} /> 
      </Routes>
    </Router>
  );
}

export default App;
