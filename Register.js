import React, { useState } from 'react';
import '../register.css'; // Optional: Create a CSS file for additional styling

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // To show loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear the error when the user types
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\d{11}$/.test(formData.phone)) {
      newErrors.phone = 'Phone Number must be 11 digits';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true); // Show loading state

      try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          }),
        });

        const result = await response.json();
        
        if (response.ok) {
          setShowSuccess(true); // Show success message
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
          });
          setErrors({});
        } else {
          alert(result.message); // Display error message
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Server error, please try again later');
      }

      setIsSubmitting(false); // Hide loading state
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center" style={{ marginBottom: '60px' }}>
      {/* Success Dialog */}
      {showSuccess && (
        <div className="position-fixed top-0 start-50 translate-middle-x mt-3">
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            Registration successful!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShowSuccess(false)}></button>
          </div>
        </div>
      )}

      <div className="login-container d-flex flex-column w-75 w-md-50">
        <div className="row w-80">
          <div className="col-md-6 p-0 d-none d-md-block" style={{ height: '500px' }}>
            <img src="/images/register.jpg" alt="Register Visual" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
          </div>

          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center p-4">
            <h3 className="left-align mb-4">Empire Design</h3>
            <h6 className="left-align">Create Account</h6>

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
              {/* First Name and Last Name Row */}
              <div className="row mb-2">
                <div className="col-6">
                  <input
                    type="text"
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="row mb-2">
                <div className="col-6">
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <small className="text-danger">{errors.phone}</small>}
                </div>
              </div>

              {/* Password and Confirm Password Row */}
              <div className="row mb-3">
                <div className="col-6">
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <small className="text-danger">{errors.password}</small>}
                </div>
                <div className="col-6">
                  <input
                    type="password"
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                </div>
              </div>

              <button type="submit" className="btn btn-dark w-100 mb-3" disabled={isSubmitting}>
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="w-100 text-center">
              Already have an account? <a href="/login">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
