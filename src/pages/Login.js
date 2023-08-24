import React, { useState } from 'react';
import { authenticateUser } from './auth';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Manejo de errores

  const handleLogin = async () => {
    try {
      const token = await authenticateUser(username, password);
      if (token) {
        setToken(token);
      } else {
        setError('Invalid username or password'); // Mostrar mensaje de error
      }
    } catch (error) {
      setError('An error occurred'); // Manejo de error genérico
    }
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p className="error">{error}</p>} {/* Mostrar mensaje de error */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
