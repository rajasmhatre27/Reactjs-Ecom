import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3>About Us</h3>
          <p>We offer the best products at the best prices.</p>
        </div>
        <div style={styles.section}>
          <h3>Quick Links</h3>
          <ul style={styles.list}>
            <li><a href="/about" style={styles.link}>About</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
            <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3>Contact</h3>
          <p>Email: support@ecommerce.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: rajasmhatre2704@gmail.com</p>
          <p>Phone: 7218858844</p>
        </div>
      </div>
      <div style={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} eCommerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    marginTop: "20px",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    maxWidth: "1100px",
    margin: "auto",
    padding: "20px",
  },
  section: {
    flex: "1",
    minWidth: "200px",
    margin: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  bottom: {
    borderTop: "1px solid #444",
    paddingTop: "10px",
    marginTop: "10px",
  }
};

export default Footer;
