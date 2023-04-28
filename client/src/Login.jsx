import React, { useState } from "react";
import './Login.css'; 

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous error
        setError(null);

        // Basic validation
        if (!username || !password) {
            setError('Please fill in both the username and password fields.');
            return;
        }

        // Send a request to the server here. This is a placeholder.
        try {
            // const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ username, password }) });
            // const data = await response.json();

            // if (!response.ok) {
            //     throw new Error(data.message || 'Something went wrong.');
            // }

            // User is now logged in
            console.log('User logged in:', username);
        } catch (err) {
            // If login failed, display an error message
            setError(err.message);
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
                {error && <p className="error-message" style={{color: 'red'}}>{error}</p>}
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            <div className="auth-form-divider"></div>
            <button className="auth-form-guest-btn" onClick={() => props.onFormSwitch('guest')}>Play as a guest</button>
        </div>
    )
}
