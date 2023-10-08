import "../App.css";
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={`src/assets/home-icon.png`} />
            </Link>
        </nav>
    )
}

export default Navbar;