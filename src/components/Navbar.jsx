import "../App.css";
import homeIcon from "../assets/home-icon.png"
import cart from "../assets/cart.png"
import AddNewWhiskeyPage from "../pages/AddNewWhiskeyPage"
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={homeIcon} style={{ height: "30px" }} />
            </Link>
            <Link to="/whiskeys/new">
                <h3>Request a Whiskey</h3> 
            </Link>
            <Link to="/whiskeys/cart">
                <img src={cart} style={{ height: "40px" }} />
            </Link>
        </nav>
    )
}

export default Navbar;