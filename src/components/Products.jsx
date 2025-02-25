import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      const products = await response.json();
      setData(products);
      setFilter(products);
      setLoading(false);
    };

    getProducts();
  }, []);

  const filterProduct = (category) => {
    if (category === "all") {
      setFilter(data);
    } else {
      setFilter(data.filter((item) => item.category === category));
    }
  };

  const Loading = () => (
    <div className="text-center py-5">
      <Skeleton height={40} width={280} />
      <div className="row mt-3">
        {Array(6)
          .fill()
          .map((_, index) => (
            <div className="col-md-4 col-sm-6 col-12 mb-4" key={index}>
              <Skeleton height={400} />
            </div>
          ))}
      </div>
    </div>
  );

  const ShowProducts = () => (
    <>
      <div className="text-center py-4">
        {["all", "men's clothing", "women's clothing", "jewelery", "electronics"].map((category) => (
          <button
            key={category}
            className="btn btn-outline-dark btn-sm mx-2 mb-2"
            onClick={() => filterProduct(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="row">
        {filter.map((product) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4" key={product.id}>
            <div className="card text-center h-100 shadow-sm">
              <img className="card-img-top p-3" src={product.image} alt={product.title} height={300} style={{ objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="card-title">{product.title.substring(0, 15)}...</h5>
                <p className="card-text text-muted">{product.description.substring(0, 90)}...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item fw-bold">$ {product.price}</li>
              </ul>
              <div className="card-body d-flex flex-wrap justify-content-center">
                <Link to={`/product/${product.id}`} className="btn btn-dark m-1">
                  Buy Now
                </Link>
                <button className="btn btn-outline-dark m-1" onClick={() => addProduct(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="container my-4">
      <h2 className="display-5 text-center">Latest Products</h2>
      <hr />
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
