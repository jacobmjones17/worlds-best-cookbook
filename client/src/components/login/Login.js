import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

const Login = ( { onLogin } ) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        }).then((response) => {
            if (response.ok) {
            response.json().then((user) => onLogin(user));
            navigate("/recipes");
            }
            else {
                response.json().then(console.log)
            }
        });
    }


    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Email"
                id="login-email"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                type="password"
                placeholder="Password" 
                id="login-password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" value="Login">Login</button>
            </form>
        </div>
    );
}

export default Login