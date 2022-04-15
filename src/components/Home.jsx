import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card mb-3 bg-dark text-white border-0 ">
        <img
          src="/assets/2deep-hoodie.jpg"
          className="card-img-top"
          alt="Background"
          height="750px"
        />
        <div className="card-img-overlay d-flex flex-column justify-conten-start mt-5">
          <div className="container  ">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVAL{" "}
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
