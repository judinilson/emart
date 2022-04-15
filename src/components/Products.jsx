/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:3000");

    const getproducts = async () => {
      setLoading(true);

      const response = await fetch("https://fakestoreapi.com/products", {
        headers: headers,
      });
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filterData);
      }
      return () => {
        componentMounted = false;
      };
    };
    getproducts();
  }, []);

  //LOADING
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  // FILTER PRODUCTS
  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };

  //SHOW PRODUCTS
  const ShowProducts = () => {
    return (
      <>
        <div className="container d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Man's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("wome n's clothing")}
          >
            Women's Cloathing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2 "
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        {filterData.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div key={product.id} className="card h-100 text-center p-4 ">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px "
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">$ {product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark "
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="text-center fw-bolder dispaly-6 ">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
