import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; 
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
  const [Username, SetUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setEerror] = useState('');
  const [isUsernameTyping, setIsUsernameTyping] = useState(false);
  const [isPasswordTyping, setIsPasswordTyping] = useState(false);

  const handleUsernameChange = (e) => {
    SetUsername(e.target.value);
    setIsUsernameTyping(e.target.value.length > 0); 
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordTyping(e.target.value.length > 0);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/account/login', {
        userName: Username,
        password: password,
      });
      const user = response.data;
      if (user && user.token) {
        localStorage.setItem('token', user.token);
      } else {
        setEerror('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='body'>
      <div className='wrapper'>
        <form action="">
          <h1 className='loog'>Login</h1>
          <div className="input-box">
            <input 
              type="text" 
              placeholder='Username' 
              value={Username} 
              onChange={handleUsernameChange} 
              required 
            />
            {!isUsernameTyping && <FaUserAlt className='icon' />} 
          </div>

          <div className="input-box">
            <input 
              type="password" 
              placeholder='Password' 
              value={password} 
              onChange={handlePasswordChange}  
              required 
          />
          {!isPasswordTyping && <FaLock className='icon2' />} 
          </div>

          {error && <h5 className='error-message'>{error}</h5>}

          <div className="remember-forgot">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit">Login</button>
          <div className="register-linkss">
            <p >Don't have an account?  <Link to="/Signup" className='singgg'> Sign in</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Login;
