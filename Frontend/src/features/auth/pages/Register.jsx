import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const navigate = useNavigate()
    const { loading, handleRegister } = useAuth()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        // ✅ Validation
        if (!username || !email || !password) {
            alert("Please fill all fields")
            return
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters")
            return
        }

        console.log("🔍 Register Data:", { username, email, password })

        const res = await handleRegister({ username, email, password })

        console.log("🔍 Register Result:", res)

        if (res === true) {
            console.log("✅ Registration successful → navigating to Home")
            navigate("/")
        } else {
            alert("Registration failed ❌ Try different email")
        }
    }

    if (loading) {
        return (<main><h1>Loading.......</h1></main>)
    }

    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label>Username</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            placeholder='Enter username'
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder='Enter email address'
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder='Enter password'
                            required
                        />
                    </div>

                    <button className='button primary-button'>
                        Register
                    </button>

                </form>

                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </main>
    )
}

export default Register