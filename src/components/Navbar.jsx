import "../App.css";
import homeIcon from "../assets/home-icon.png"
import AddNewWhiskeyPage from "../pages/AddNewWhiskeyPage"
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={homeIcon} />
            </Link>
            <Link to="/whiskeys/new">
                <h3>Request a Whiskey</h3> 
            </Link>
        </nav>
    )
}

export default Navbar;