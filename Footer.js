import React from "react";
import "../Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Section */}
        <div className="row">
          <div className="col">
            <h5>Helpful Links</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Delivery and Returns Policy</a></li>
              <li><a href="#">Help & FAQ</a></li>
              <li><a href="#">Service for Professionals</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>Contact Info</h5>
            <p>Oxford (UK): 1-3 Abbey Street, Eynsham, Oxford, OX29 4TB</p>
            <p>Walnut, CA (USA): 340 S Lemon Ave #3358, Walnut, California 91789</p>
          </div>
          <div className="col">
            <h5>Sign In Now</h5>
            <form>
              <input type="email" placeholder="Email" />
              <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  
                />
              <button type="submit" className="btn btn-primary">Sign In Now</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>
            © 2022 <a href="mailto:kreya@example.com">kreyaparekh@gmail.com</a>. Designed by
          </p>
          <div className="social-icons">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
