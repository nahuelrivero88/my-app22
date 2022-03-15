import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { CartView } from './Components/CartView/CartView';




function App() {
  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:prodId" element={<ItemListContainer/>} />
        <Route path="/detail/:prodId" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<CartView/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;