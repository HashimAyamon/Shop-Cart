import React from 'react';
import shop from './assets/shop.jpg'
const About = () => {
  return (
    <section className="about-section py-5 bg-light">
      <div className="container">
        <div className="row">
          {/* Heading */}
          <div className="col-12 text-center mb-4">
            <h2> <b>SHOP CART</b></h2>
            <p className="lead">
              Your one-stop shop for everything you need.
            </p>
          </div>
        </div>

        <div className="row">
          {/* About Content */}
          <div className="col-md-6">
            <h4>Who We Are</h4>
            <p>
              We are a dedicated team of professionals with 25 years of experience in providing high-quality products to our customers. 
              Our mission is to offer the best online shopping experience by delivering top-notch customer service and an extensive 
              range of products at competitive prices.
            </p>
          </div>

          {/* Image */}
          <div className="col-md-6">
            <img
              src={shop}
              alt="About Us"
              className="img-fluid rounded"
            />
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default About;
