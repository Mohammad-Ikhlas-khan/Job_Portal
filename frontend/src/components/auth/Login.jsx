import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { toast } from 'react-toastify';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/auth/login", {
                username,
                password
            });
            localStorage.setItem("token", response.data);
            toast.success('Logged in successfully!');
            navigate("/");

        } catch (error) {
            console.error("Error logging in:", error);
            toast.error('Failed to log in. Please try again.');
        }
    };

    return (
        <div className="w-full min-h-screen bg-gray-800 flex">
                <Form type="login" onSubmit={handleSubmit} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>
        </div>
    );
}

export default Login;