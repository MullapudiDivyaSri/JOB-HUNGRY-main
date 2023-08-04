import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from "../actions/userActions";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = "/"
    }
  }, []);

  useEffect(() => {
    // Check if both email and password fields are filled
    setIsFormValid(email.trim() !== '' && password.trim() !== '');
  }, [email, password]);

  const login = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  const containerStyle = {
    background: '#e84393',
    backgroundImage: 'linear-gradient(45deg, #e84393, #6c757d)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle = {
    padding: '20px',
   
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    background: '#fff',
    color: '#333',
    width: '100%', // Adjust the width of the card
  };

  const formControlStyle = {
    margin: '10px 0',
    borderRadius: '5px',
    padding: '10px',
    border: 'none',
    background: '#f3f3f3',
    outline: 'none',
    width: '100%',
    fontSize: '16px',
  };

  const loginButtonStyle = {
    width: '100%',
    height: '50px',
    fontSize: '18px',
    fontWeight: 'bold',
    background: '#e84393',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: isFormValid ? 'pointer' : 'not-allowed',
    transition: 'margin 0.3s ease', // Add transition for sliding effect
    marginTop: '20px', // Add margin to separate button from inputs
    marginLeft: isFormValid ? '0' : '100%', // Slide the button when form is invalid
  };

  const registerLinkStyle = {
    textAlign: 'center',
    fontSize: '20px',
    color: '#fff',
    textDecoration: 'none',
    marginTop: '20px',
    display: 'block',
  };

  return (
    <div style={containerStyle}>
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-3 mb-5 rounded" style={cardStyle}>
          <div className='card p-5'>
            <h2 style={{ textAlign: 'center', color: '#e84393', marginBottom: '20px' }}>Login</h2>
            <div>
              <input
                required
                type="text"
                placeholder="email"
                style={formControlStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                required
                type="password"
                placeholder="password"
                style={formControlStyle}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button onClick={isFormValid ? login : undefined} style={loginButtonStyle}>Login</button>
              <br />
              <p style={registerLinkStyle}><Link to="/register">Go to register page</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
