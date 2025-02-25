import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const state = useSelector(state => state.handleCart);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3 sticky-top">
            <div className="container">
                {/* Logo */}
                <NavLink className="navbar-brand fw-bold fs-3 text-light" to="/">
                    <i className="fa fa-shopping-bag me-2"></i> Rajas Store
                </NavLink>

                {/* Toggle Button for Mobile */}
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

                {/* Navigation Links */}
                <div className="collapse navbar-collapse text-center" id="navbarNav">
                    <ul className="navbar-nav m-auto my-2">
                        <li className="nav-item">
                            <NavLink className="nav-link text-light px-3" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light px-3" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light px-3" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light px-3" to="/contact">Contact</NavLink>
                        </li>
                    </ul>

                    {/* Buttons (Responsive Alignment) */}
                    <div className="d-flex gap-2 mt-3 mt-lg-0">
                        <NavLink to="/login" className="btn btn-primary px-3">
                            <i className="fa fa-sign-in-alt me-1"></i> Login
                        </NavLink>
                        <NavLink to="/register" className="btn btn-info px-3">
                            <i className="fa fa-user-plus me-1"></i> Register
                        </NavLink>
                        <NavLink to="/cart" className="btn btn-success px-3">
                            <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
