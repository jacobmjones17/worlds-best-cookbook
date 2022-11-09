import React, { useRef, useState } from 'react'
import "./LoginSignupContainer.css"
import Login from '../login/Login';
import Signup from '../signup/Signup';

function LoginSignupContainer({ onLogin }) {
    const [login, setLogin] = useState(true);
    const loginSignupContainerRef = useRef(null)
    
    const handleClick = () => {
        setLogin(!login);
    }

    // loginSignupContainerRef.current.classList.toggle("active");

return (
    <div className="login-signup-container" ref={loginSignupContainerRef}>
    <Login onLogin={onLogin}/>
    <div className="side-div">
    <button type="button" onClick={handleClick}> {login ? "Login" : "Signup"} </button>
    </div>
    <Signup onLogin={onLogin}/>
    </div>
)
}

export default LoginSignupContainer