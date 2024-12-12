import React from 'react';
import Product1 from './assets/product1.jpg'
import Product2 from './assets/product2.webp'
import Product3 from './assets/product3.webp'

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="banner-section text-white text-center py-5" style={{ backgroundColor: '#333' }}>
        <div className="container">
          <h1>Welcome To ShopCart</h1>
          <p>Shop the exclusive deals from us</p>
          <a href="about" className="btn btn-primary mt-3">VIEW US</a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products py-5">
  <div className="container">
    <h2 className="text-center mb-4">Featured Products</h2>
    <div className="row">
      {/* Product Card */}
      <div className="col-md-4 mb-4">
        <div className="card product-card h-100">
          <img
            src={Product1}
            className="card-img-top"
            alt="Product 1"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Audio Devices</h5>
            <p className="card-text">$29.99</p>
            <a href="/products" className="btn btn-primary mt-auto">Buy Now</a>
          </div>
        </div>
      </div>

      {/* Product Card */}
      <div className="col-md-4 mb-4">
        <div className="card product-card h-100">
          <img
            src={Product2}
            className="card-img-top"
            alt="Product 2"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Gadgets</h5>
            <p className="card-text">$59.99</p>
            <a href="/products" className="btn btn-primary mt-auto">Buy Now</a>
          </div>
        </div>
      </div>

      {/* Product Card */}
      <div className="col-md-4 mb-4">
        <div className="card product-card h-100">
          <img
            src={Product3}
            className="card-img-top"
            alt="Product 3"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Home Appliance</h5>
            <p className="card-text">$49.99</p>
            <a href="/products" className="btn btn-primary mt-auto">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Promotion Section */}
      <section className="promotion-section text-center py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2>Exclusive Discounts</h2>
          <p>Sign up now and get 10% off on your first order</p>
          <a href="contact" className="btn btn-success mt-3">Sign Up Now</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
