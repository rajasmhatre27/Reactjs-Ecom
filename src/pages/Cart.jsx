import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const addItem = (product) => dispatch(addCart(product));
  const removeItem = (product) => dispatch(delCart(product));

  const EmptyCart = () => (
    <div className="container text-center py-5">
      <h4 className="display-5">Your Cart is Empty</h4>
      <Link to="/" className="btn btn-outline-dark mt-3">
        <i className="fa fa-arrow-left"></i> Continue Shopping
      </Link>
    </div>
  );

  const ShowCart = () => {
    let subtotal = state.reduce((total, item) => total + item.price * item.qty, 0);
    let shipping = 30.0;
    let totalItems = state.reduce((total, item) => total + item.qty, 0);

    return (
      <section className="h-100">
        <div className="container py-4">
          <div className="row">
            {/* Cart Items */}
            <div className="col-lg-8">
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-light py-3">
                  <h5 className="mb-0">Shopping Cart</h5>
                </div>
                <div className="card-body">
                  {state.map((item) => (
                    <div key={item.id} className="row align-items-center border-bottom py-3">
                      <div className="col-4 col-md-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid rounded"
                          style={{ maxHeight: "80px", objectFit: "contain" }}
                        />
                      </div>
                      <div className="col-8 col-md-6">
                        <h6 className="mb-1">{item.title.substring(0, 20)}...</h6>
                        <p className="mb-1 text-muted">
                          {item.qty} x ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="col-12 col-md-3 d-flex align-items-center justify-content-between">
                        <button className="btn btn-sm btn-outline-dark px-2" onClick={() => removeItem(item)}>
                          <i className="fas fa-minus"></i>
                        </button>
                        <span className="mx-2">{item.qty}</span>
                        <button className="btn btn-sm btn-outline-dark px-2" onClick={() => addItem(item)}>
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4">
              <div className="card shadow-sm">
                <div className="card-header bg-light py-3">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Items ({totalItems}) <span>${subtotal.toFixed(2)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Shipping <span>${shipping.toFixed(2)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <strong>Total</strong> <strong>${(subtotal + shipping).toFixed(2)}</strong>
                    </li>
                  </ul>
                  <Link to="/checkout" className="btn btn-dark btn-lg btn-block mt-3">
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h1 className="text-center">Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
