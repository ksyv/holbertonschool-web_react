import React from 'react';
import './Login.css';

function Login() {
  return (
    <main role="main" className="App-body">
      <p>Login to access the full dashboard</p>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="button">OK</button>
      </div>
    </main>
  );
}

export default Login;