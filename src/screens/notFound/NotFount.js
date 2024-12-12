import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router

const NotFound = () => {
  const navigate = useNavigate();

  // Function to navigate back to the home page
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <h1 className="display-1">404</h1>
      <p className="lead">Oops! The page you're looking for doesn't exist.</p>
      <button className="btn btn-primary" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
