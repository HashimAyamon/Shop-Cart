import React from 'react';
import { NavLink } from 'react-router-dom';
import shopcart from './assets/shopcart.jpg'


const Header = () => {
  return (
    <header className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="">
            <img src={shopcart} width="120" />
          </a>

          {/* Toggle button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                 {/* <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>  */}
                <NavLink to='/' className='nav-link'>Home</NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">
                  Shop
                </a> */}
                <NavLink className='nav-link' to='/products'> Our Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about'>About Us</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to='/contact'>LOGIN</NavLink>
              </li>
            </ul>

            {/* Search bar */}
            <form className="d-flex me-3">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"50%"}}/>
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>

            {/* User & Cart icons */}
            <div className="d-flex">
              <a href="contact" className="btn btn-outline-secondary me-2">
                <i className="bi bi-person"></i> Contact Us
              </a>
              <a href="/cart" className="btn btn-outline-secondary">
                <i className="bi bi-cart"></i> Cart 
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
