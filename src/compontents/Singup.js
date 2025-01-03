import React, { useState } from 'react';
import axios from 'axios';
import './Singup.css';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Signup = () => {
  const [Username, SetUsername] = useState('');
  const [email, SetEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setEerror] = useState('');
  const [isUsernameTyping, setIsUsernameTyping] = useState(false);
  const [isEmailTyping, setIsEmailTyping] = useState(false);
  const [isPasswordTyping, setIsPasswordTyping] = useState(false);

  const handleUsernameChange = (e) => {
    SetUsername(e.target.value);
    setIsUsernameTyping(e.target.value.length > 0); 
  }

  const handleEmailChange = (e) => {
    SetEmail(e.target.value);
    setIsEmailTyping(e.target.value.length > 0); 
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordTyping(e.target.value.length > 0); 
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/account/signup', { // تأكد من عنوان API هنا
        userName: Username,
        email: email,
        password: password,
      });
      const user = response.data;
      if (user && user.token) {
        localStorage.setItem('token', user.token);
      } else {
        setEerror('Invalid username or password');
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className='body'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1 className='loog'>Sign in</h1>
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
              type="text" 
              placeholder='Email' 
              value={email} 
              onChange={handleEmailChange} 
              required 
            />
            {!isEmailTyping && <MdOutlineMail className='icon' />} 
          </div>
          <div className="input-box">
            <input 
              type="password" 
              placeholder='Password' 
              value={password} 
              onChange={handlePasswordChange} 
              required 
            />
            {!isPasswordTyping && <FaLock className='icon22' />}
          </div>
          {error && <h5 className='error-message'>{error}</h5>}
          <button type="submit">Sign in</button>
          <div className="register-link">
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
