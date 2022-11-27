import React from "react";
import Logout from "../logout/Logout";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = ({loggedIn, logoutUser, currentUser}) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE"
        }).then(() => {
            navigate("/")
            logoutUser();
        })
    }

    const loggedinNav = () => {
        return (
        <nav>
            <a href="/recipes">World's Best Cookbook</a>
            <div>
                <p>Welcome, <span>Guest</span></p>
                <Logout handleLogout={handleLogout}/>
            </div>
        </nav>
        )
    }

    const loggedoutNav = () => {
        return(
        <nav>
            <a href="/">World's Best Cookbook</a>
            <div>
                <p>Welcome, <span>Guest</span></p>
            </div>
        </nav>
        )
    }
    return (
        <div> {loggedIn ? loggedinNav() : loggedoutNav()}</div>
    )
}
export default NavBar
