import { Link, NavLink } from "react-router-dom"
import Logo from '../assets/shopping-logo.svg';
import './Header.css';

export const Header = () => {
    return (
        <div>
            <header>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Shopmate logo" />
                    <span>Shopmate Cart</span>
                </Link>
                <nav className="navigation">
                    <NavLink to="/" className="link" end>Home</NavLink>
                    <NavLink to="/cart" className="link">Cart</NavLink>
                </nav>
                <Link to="/cart" className="items">
                    <span>Cart 2:</span>
                </Link>
            </header>
        </div>
    )
}
