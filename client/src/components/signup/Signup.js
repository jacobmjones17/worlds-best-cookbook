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
        // debugger
        fetch("http://localhost:3001/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            password_confirmation: confirmPassword
          }),
        }).then((response) => {
          if (response.ok) {
            response.json().then((user) => onLogin(user));
            navigate("/")
          }
          else {
            response.json().then(console.log)
          }
        });
      }

    return (
        <div className="signup">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    id="signup-email"
                    placeholder="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="password"
                    id="signup-password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                type="password"
                id="confirm-password"
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