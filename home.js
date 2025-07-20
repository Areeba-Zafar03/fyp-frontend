// Home.js
import React from 'react';

import '../Home.css'; // Update the path based on the actual location of Header.css


const Home = () => {
  return (
    <div>

      {/* Main Images (Slideshow) */}
      <div className="carousel-container mt-4">
        <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/photo2.jpeg" className="d-block w-100" alt="Living Room" />
            </div>
            <div className="carousel-item">
              <img src="/images/photo11.jpg" className="d-block w-100" alt="living room" />
            </div>

            <div className="carousel-item">
              <img src="/images/photo3.jpeg" className="d-block w-100" alt="Outdoor Room" />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Furniture Collection Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Explore Our Furniture Collection</h2>
        <div className="row">
          {/* Accessories Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="bg-light p-3 shadow-sm rounded">
              <img src="/images/photo4.png" alt="Accessories" className="img-fluid mb-3" style={{ maxWidth: '80%', height: 'auto' }} />
              <h5 className="text-center">Accessories</h5>
            </div>
          </div>
          {/* Sofas & Armchairs Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="bg-light p-3 shadow-sm rounded">
              <img src="/images/photo5.jpeg" alt="Sofas and Armchairs" className="img-fluid mb-3" style={{ maxWidth: '80%', height: 'auto' }} />
              <h5 className="text-center">Sofas & Armchairs</h5>
            </div>
          </div>
          {/* Chairs & Stools Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="bg-light p-3 shadow-sm rounded">
              <img src="/images/photo6.jpeg" alt="Chairs and Stools" className="img-fluid mb-3" style={{ maxWidth: '80%', height: 'auto' }} />
              <h5 className="text-center">Chairs & Stools</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Furniture Sections */}
      <div className="container mt-5">
        <div className="row">
          {/* Dining Room Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="bg-light p-3 shadow-sm rounded">
              <img src="/images/photo7.jpeg" alt="Dining Room" className="img-fluid mb-3" style={{ maxWidth: '80%', height: 'auto' }} />
              <h5 className="text-center">Tables</h5>
            </div>
          </div>
          {/* Home Office Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="bg-light p-3 shadow-sm rounded">
              <img src="/images/photo8.jpeg" alt="Home Office" className="img-fluid mb-3" style={{ maxWidth: '80%', height: 'auto' }} />
              <h5 className="text-center">Furnishing</h5>
            </div>
          </div>
          {/* Outdoor Furniture Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="bg-light p-3 shadow-sm rounded">
              <img src="/images/photo5.jpeg" alt="Outdoor Furniture" className="img-fluid mb-3" style={{ maxWidth: '80%', height: 'auto' }} />
              <h5 className="text-center">Lightening</h5>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Art of Comfortable Living */}
      <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-7">
      <div className="border-dotted small-div p-4">
        <h4 className="text-center">The Art of Comfortable Living</h4>
        <p className="text-center">"Where Style Meets Serenity, and Every Space Tells a Story."</p>

        <div className="text-center mt-4">
                <button className="btn btn-danger px-4 py-2">
                  Explore All Items → 
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border-dotted p-4">
              <h5 className="text-center">Design your Dreams</h5>
              <p className="text-center">Upload/Capture Your Space to Get Started</p>
              <div className="d-flex justify-content-around">
                <div className="text-center">
                  <i className="bi bi-cloud-upload" style={{ fontSize: '1rem' }}></i>
                  <p>Upload</p>
                </div>
                <div className="text-center">
                  <i className="bi bi-camera" style={{ fontSize: '1rem' }}></i>
                  <p>Capture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="join-us-container d-flex justify-content-center align-items-stretch p-3 mt-5">
        <div className="left-section text-white d-flex flex-column justify-content-center align-items-center p-4">
          <h1>Join Us</h1>
          <hr className="divider my-2" />
          <p className="text-center">Sign up for the newsletter</p>
          <form className="newsletter-form w-100">
            <input type="text" placeholder="Name" className="form-control input-field mb-3" />
            <input type="email" placeholder="hello@abcdef.com" className="form-control input-field mb-3" />
            <button type="submit" className="btn btn-dark submit-button w-100">Sign Up Now</button>
          </form>
          <p className="terms mt-3" style={{ fontSize: '13px' }}>
            By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.
          </p>
        </div>
        <div className="right-section d-flex justify-content-center align-items-center">
          <img src="/images/photo10.jpg" alt="Bedroom Design" className="image img-fluid" />
        </div>
      </div>
     
    </div>
  );
};

export default Home;
