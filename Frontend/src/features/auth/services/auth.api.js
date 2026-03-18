import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/api",   // ✅ keep this
    withCredentials: true
})

// 🔥 REGISTER
export async function register({ username, email, password }) {
    try {
        const response = await api.post('/auth/register', {
            username, email, password
        })
        return response.data
    } catch (err) {
        console.log("Register Error:", err?.response?.data || err.message)
        return null
    }
}

// 🔥 LOGIN
export async function login({ email, password }) {
    try {
        const response = await api.post("/auth/login", {
            email, password
        })
        return response.data
    } catch (err) {
        console.log("Login Error:", err?.response?.data || err.message)
        return null
    }
}

// 🔥 LOGOUT
export async function logout() {
    try {
        const response = await api.get("/auth/logout")
        return response.data
    } catch (err) {
        console.log("Logout Error:", err?.response?.data || err.message)
    }
}

// 🔥 GET ME
export async function getMe() {
    try {
        const response = await api.get("/auth/get-me")
        return response.data
    } catch (err) {
        console.log("GetMe Error:", err?.response?.data || err.message)
        return null
    }
}