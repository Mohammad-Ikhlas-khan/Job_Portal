import { jwtDecode } from "jwt-decode";

export function getUserData() {
    const token = localStorage.getItem("token");

    if (!token) {
        return null;
    }

    try{
        const decodedToken = jwtDecode(token);
        return {
            username: decodedToken?.sub,
            role: decodedToken?.role
        }
    } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token");
        return null;
    }   
}