import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/salvehr.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";

const Login = () => {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-lg-6 d-none d-lg-flex flex-column align-items-center justify-content-center text-white bg-dark p-5 rounded-start">
          <img src={logo} alt="Salve HR Logo" className="logo mb-3" />
          <h2>WELCOME BACK</h2>
          <p className="text-center">
            Join us again! Enter your credentials and explore our HRMS.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 bg-light p-5 rounded-end">
          <h2 className="text-center mb-4">LOGIN</h2>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email / Username"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button className="btn btn-success w-100 mb-3">Sign In</button>
            <div className="text-center">
              <Link to="/forgot-password" className="text-decoration-none">
                Forgot Password?
              </Link>
            </div>
            <div className="text-center mt-3">
              Don't have an account?{" "}
              <Link to="/register" className="text-decoration-none">
                Register Now
              </Link>
              <Link to="/dashboard" className="text-decoration-none">
                Dashboard
              </Link>
              <Link to="/employeedata" className="text-decoration-none">
                Employeedata
              </Link>
              <Link to="/payrollmanagement" className="text-decoration-none">
                Payroll Management
              </Link>
              <Link to="/legalframe" className="text-decoration-none">
                Legal Framework
              </Link>
              <Link to="/leavemanage" className="text-decoration-none">
                Leave Management
              </Link>
              <Link to="/Usersupport" className="text-decoration-none">
                User Support
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;