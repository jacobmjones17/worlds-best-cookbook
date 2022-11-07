import React, { useState } from "react";
import "./Signup.css";
import {useNavigate} from "react-router-dom";

const Signup = ( {onLogin} ) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            confirmPassword
          }),
        }).then((response) => {
          if (response.ok) {
            response.json().then((user) => onLogin(user));
            navigate("/")
          }
        });
      }

    return (
        <div className="signup">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    id="username"
                    placeholder="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="password"
                    id="username" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                type="password"
                id="username"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup