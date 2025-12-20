import React, { useState } from "react";
import "./App.css";

function Navbar(){
    const [ open , setopen ] = useState(false)

    return (
        <nav className="navbar">
            <h1 className="logo">My App</h1>

            <button className="menu-btn" onClick={() => setopen(!open)}>
                =
            </button>

            <ul className={`nav-links ${open ? "show" : ""}`}>

                <li>Home</li>
                <li>About</li>
                <li>Profile</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;