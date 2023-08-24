import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setToken }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token'); // Clear token from storage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
