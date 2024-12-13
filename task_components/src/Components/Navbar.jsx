import React from "react";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink className={(e) => { return e.isActive ? "blue" : "" }} id="text" to="/">About Us</NavLink>
                <NavLink className={(e) => { return e.isActive ? "blue" : "" }} id="text" to="/mymeals">My Meal</NavLink>
                <NavLink className={(e) => { return e.isActive ? "blue" : "" }} id="text" to="/mocktails">Mocktails</NavLink>
                <NavLink className={(e) => { return e.isActive ? "blue" : "" }} id="text" to="/harrypotter">Harry Potter</NavLink>
                <NavLink className={(e) => { return e.isActive ? "blue" : "" }} id="text" to="/bank">Bank</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;
