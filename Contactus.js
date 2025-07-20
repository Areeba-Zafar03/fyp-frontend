import React from "react";
import "../contactus.css";

const ContactUs = () => {
  return (
    <div className="contactus-container container ">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-6">
          <div className="image-container">
            <img
              src="/images/aboutus.jpg"
              alt="Office"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6">
          <div className="contact-form">
            <h2 className="contact-title">Let’s talk</h2>
            <p className="contact-description">
              Our friendly customer service team always responds to inquiries
              within 24 hours.
            </p>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
            <div className="social-links mt-3">
              <p>Get in touch</p>
              <a href="#" className="me-2">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="me-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
