import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const state = useSelector(state => state.handleCart);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim()) {
            navigate(`/search?query=${searchTerm}`);
        }
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.container}>
                <NavLink to="/" style={styles.brand}>Rajas Store</NavLink>

                {/* Search Bar */}
                <div style={styles.searchContainer}>
                    <input 
                        type="text" 
                        style={styles.searchInput} 
                        placeholder="Search products..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button style={styles.searchButton} onClick={handleSearch}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>

                {/* Navigation Links */}
                <ul style={styles.navLinks}>
                    <li><NavLink to="/" style={styles.navItem}>Home</NavLink></li>
                    <li><NavLink to="/product" style={styles.navItem}>Products</NavLink></li>
                    <li><NavLink to="/about" style={styles.navItem}>About</NavLink></li>
                    <li><NavLink to="/contact" style={styles.navItem}>Contact</NavLink></li>
                </ul>

                {/* Buttons */}
                <div style={styles.buttons}>
                    <NavLink to="/login" style={styles.loginButton}><i className="fa fa-sign-in-alt"></i> Login</NavLink>
                    <NavLink to="/register" style={styles.registerButton}><i className="fa fa-user-plus"></i> Register</NavLink>
                    <NavLink to="/cart" style={styles.cartButton}><i className="fa fa-shopping-cart"></i> Cart ({state.length})</NavLink>
                </div>
            </div>
        </nav>
    );
};

// 🌈 Updated Styling
const styles = {
    navbar: {
        backgroundColor: "#222",
        padding: "15px 0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
    },
    brand: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#fff",
        textDecoration: "none",
        transition: "0.3s",
    },
    searchContainer: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "25px",
        padding: "5px 10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    },
    searchInput: {
        border: "none",
        outline: "none",
        padding: "8px",
        borderRadius: "20px",
        width: "200px",
    },
    searchButton: {
        background: "#333",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        padding: "5px 10px",
        fontSize: "18px",
        borderRadius: "5px",
    },
    navLinks: {
        listStyle: "none",
        display: "flex",
        gap: "15px",
    },
    navItem: {
        color: "#fff",
        textDecoration: "none",
        padding: "8px 12px",
        transition: "0.3s",
    },
    buttons: {
        display: "flex",
        gap: "10px",
    },
    loginButton: {
        backgroundColor: "#007BFF", // Deep Blue
        color: "#fff",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        transition: "0.3s",
    },
    registerButton: {
        backgroundColor: "#007BFF", // Deep Blue
        color: "#fff",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        transition: "0.3s",
    },
    cartButton: {
        backgroundColor: "#28A745", // Bright Green
        color: "#fff",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        transition: "0.3s",
    }
};

export default Navbar;
