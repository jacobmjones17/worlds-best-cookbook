import React from "react";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <a href="/">World's Best Cookbook</a>
            <div>
                <p>Welcome, <span>Guest</span></p>
                <i className="fa-solid fa-user"></i>
            </div>
        </nav>
        
    )
}

export default NavBar
