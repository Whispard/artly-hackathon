import React, { useState } from 'react';
import { baseUrl } from '../apiConfig';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${baseUrl}/api/users/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    // Assuming the API response is in JSON format
    const data = await response.json();

    // Check if the login was successful
    if (response.ok) {
      // Perform any necessary actions upon successful login
      console.log('Login successful:', data);
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('password', password);
    } else {
      // Handle the error if login failed
      console.log('Login failed:', data.error);
    }

    // Reset the form
    setUsername('');
    setPassword('');
  };

  return (
    <form className='m-auto' onSubmit={handleSubmit} style={{ maxWidth: '30rem' }}>
      <div className="input-group m-4" style={{ maxWidth: '30rem', display: 'flex', justifyContent: "center" }}>
        <img src='https://cdn.pixabay.com/photo/2022/11/06/04/57/cat-7573258_1280.png' alt='Login' width='80%' />
      </div>
      <div class="input-group m-3" style={{ display: 'flex', justifyContent: "center" }}>
        <span class="input-group-text">Username</span>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange} class="form-control"
        />
      </div>

      <div class="input-group m-3" style={{ display: 'flex', justifyContent: "center" }}>
        <span class="input-group-text">Password</span>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          class="form-control"
        />
      </div>
      <div className="input-group m-4" style={{ maxWidth: '30rem', display: 'flex', justifyContent: "center" }}>
        <button type="submit" class=" m-auto btn btn-primary" style={{ maxWidth: '5rem' }}>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;