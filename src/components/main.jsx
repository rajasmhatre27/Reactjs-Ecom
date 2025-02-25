import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3 position-relative">
          <img
            className="card-img img-fluid"
            src="./assets/shop-banner.jpg"
            alt="Card"
            height={500}
            style={{ objectFit: "cover", filter: "brightness(85%) contrast(110%)" }}
          />
          <div 
            className="card-img-overlay d-flex align-items-center"
            style={{
              background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8))",
            }}
          >
            <div className="container text-center">
              <h5 className="card-title fs-1 fw-bold text-uppercase" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                New Season Arrivals
              </h5>
              <p className="card-text fs-5 d-none d-sm-block" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
                Discover the latest trends and exclusive collections. Elevate your style today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
