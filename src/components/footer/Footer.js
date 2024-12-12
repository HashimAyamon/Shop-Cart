import React from 'react';
import shopcart from './shopcart.jpg'


const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#343a40', color: '#fff' }} className="py-4">
      <div className="container">
        <div className="row">
          {/* Column 1: About */}
          <div className="col-md-4">
          <a className="navbar-brand" href="">
            <img src={shopcart} width="125" />
          </a>
            <h5>Shop Cart</h5>
            <p>
              We are an e-commerce platform dedicated to providing the best products and services.
              Shop with us for a great experience.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Home</a></li>
              <li><a href="/products" className="text-light">Shop</a></li>
              <li><a href="about" className="text-light">About Us</a></li>
              <li><a href="contact" className="text-light">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p><i className="bi bi-envelope"></i> ayamonhashim44.com</p>
            <p><i className="bi bi-telephone"></i> +91 9496180153</p>
            <p><i className="bi bi-geo-alt"></i> Malppuram Kerala</p>
            <p><i className="bi bi-github"></i> https://github.com/HashimAyamon</p>
          </div>
        </div>

        <hr className="my-3" />

        {/* Footer bottom */}
        <div className="text-center">
          <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
