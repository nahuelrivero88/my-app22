import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';
export const NavBar = () => {

    return (
    
    <header className="header">
        <h1 className="logo">Rivero Store</h1>
        <nav>
            <ul className = "nav">
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
        </nav>
        
        <CartWidget/>
    </header>
    )
}