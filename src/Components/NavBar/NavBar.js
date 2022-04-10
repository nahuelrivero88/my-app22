import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'

export const NavBar = () => {

    
    return (
    
    <header className="header">
        <Link to="/"><h1>Rivero Store</h1></Link>

        <nav>
            <ul>
                <li><Link to="/productos/Zapatillas">Zapatillas</Link></li>
                <li><Link to="/productos/Remeras">Remeras</Link></li>
                <li><Link to="/productos/Abrigos">Abrigos</Link></li>
            </ul>
        </nav>
        
        <Link to="cart"><CartWidget/></Link>
        
    </header>
    )
}
