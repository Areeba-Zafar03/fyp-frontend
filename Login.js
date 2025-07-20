import React, { useState } from 'react';
import '../Login.css'; // Optional: Create a CSS file for additional styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors
    setLoginMessage(''); // Clear any previous message

    // Check if email and password are provided
    if (!email || !password) {
      setErrors({ message: 'Email and password are required' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      if (response.status === 200) {
        setLoginMessage('Login successful!');
        // Redirect to home page after successful login
        navigate('/'); 
      }
    } catch (error) {
      setLoginMessage(error.response?.data?.message || 'An error occurred during login.');
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="login-container d-flex flex-column w-75 w-md-50">
        <div className="row w-80">
          {/* Left Image Section */}
          <div className="col-md-6 p-0 d-none d-md-block" style={{ height: '500px' }}>
            <img
              src="/images/login.jpg" // Referencing the image from the public folder
              alt="Login Visual"
              className="img-fluid w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Right Login Section */}
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center p-4">
            <h3 className="left-align mb-4">Empire Design</h3>
            <h6 className="left-align">Sign In To Empire Design</h6>

            <div className="button-container">
              <button className="btn btn-outline-primary w-10 mb-3 custom-font">
                <i className="bi bi-google"></i> Sign up with Google
              </button>
              <button className="btn btn-outline-secondary w-10 mb-3 custom-font">
                <i className="bi bi-envelope"></i> Sign up with Email
              </button>
            </div>

            <div className="mb-3 w-100 text-center">
              <hr className="w-25 d-inline" />
              <span style={{ fontWeight: 'bold', color: 'grey' }}>OR</span>
              <hr className="w-25 d-inline" />
            </div>

            <form className="w-100" onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-dark w-100 mb-3">
                Sign In
              </button>
              <button
                type="button"
                className="btn btn-light w-100 mb-3 custom-border"
                onClick={() => navigate('/register')} // Redirect to Register page
              >
                Register Now
              </button>
            </form>

            {loginMessage && <div className="alert alert-info mt-3">{loginMessage}</div>}

            {errors.message && <div className="alert alert-danger mt-3">{errors.message}</div>}

            <div className="w-100 text-end">
  <Link to="/forgetpass" className="">
    Forgot Password?
  </Link>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
