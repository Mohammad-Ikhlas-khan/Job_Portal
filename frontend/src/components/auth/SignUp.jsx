import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { toast } from 'react-toastify';

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");   
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                await axios.post("http://localhost:8080/auth/signup", {
                username,
                password,
                role
            });
            toast.success('Signed up successfully!');
            navigate("/login");

        } catch (error) {
            console.error("Error signing up:", error);
            toast.error('Failed to sign up. Please try again.');
        }
    };

    return (
        <div className="w-screen min-h-screen bg-gray-800 flex justify-center items-center">
            <Form type="signup" onSubmit={handleSubmit} username={username} setUsername={setUsername} password={password} setPassword={setPassword} role={role} setRole={setRole} />
        </div>
    );
}

export default SignUp;