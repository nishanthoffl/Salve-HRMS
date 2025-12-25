import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/salvehr.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";

const Register = () => {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-lg-6 d-none d-lg-flex flex-column align-items-center justify-content-center text-white bg-dark p-5 rounded-start">
          <img src={logo} alt="Salve HR Logo" className="logo mb-3" />
          <h2>WELCOME</h2>
          <p className="text-center">
            Join us now! Register and be part of our amazing HRMS.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 bg-light p-5 rounded-end">
          <h2 className="text-center mb-4">REGISTER</h2>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="First Name" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <button className="btn btn-success w-100 mb-3">Submit</button>
            <div className="text-center">
              Already have an account?{" "}
              <Link to="/" className="text-decoration-none">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;