import React from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {
    const navigate = useNavigate()

    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <input type={"email"} placeholder={"Email"} />
                <input type={"password"} placeholder={"Password"} />
                <button type={"submit"} onClick={() => navigate("/recipes")}>Login</button>
            </form>
        </div>
    );
}

export default Login