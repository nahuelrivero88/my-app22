import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";



function App() {
  return (
    <div className="miApp">
      <NavBar />
      <ItemListContainer />
      
    </div>
  );
}

export default App;