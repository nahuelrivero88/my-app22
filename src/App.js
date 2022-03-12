import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Components/NavBar/NavBar";
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="miApp">
      <NavBar />
      <ItemDetailContainer />
      
    </div>
  );
}

export default App;