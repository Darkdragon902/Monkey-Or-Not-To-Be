import React, { useState } from "react";
import './Register.css';

export const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, confirmPassword);
  }

  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9]{3,16}$/;
    return regex.test(username);
  }

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{3,}$/gm;
    return regex.test(password);
  }

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === password;
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameValid(validateUsername(e.target.value));
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordValid(validatePassword(e.target.value));
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordValid(validateConfirmPassword(e.target.value));
  }

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username </label>
        <input 
          value={username} 
          name="username" 
          onChange={handleUsernameChange} 
          id="username" 
          pattern="^[a-zA-Z0-9]{3,16}$" 
          required 
        />
        {!usernameValid && <p className="error-message" style={{color: 'red'}}>Username must be between 3-16 characters and contain no special characters.</p>}

        <label htmlFor="password">Password</label>
        <input 
          value={password} 
          onChange={handlePasswordChange} 
          type="password" 
          id="password" 
          name="password" 
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{3,}$" 
          required 
        />
        {!passwordValid && <p className="error-message" style={{color: 'red'}}>Password must be at least 3 characters long and contain 1 uppercase letter, 1 lowercase letter, and 1 number.</p>}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input 
          value={confirmPassword} 
          onChange={handleConfirmPasswordChange} 
          type="password" 
          id="confirmPassword" 
          name="confirmPassword" 
          required 
        />
        {!confirmPasswordValid && <p className="error-message" style={{color: 'red'}}>Passwords do not match.</p>}
        
        <button type="submit">Register</button>
      </form>

      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  )
}
