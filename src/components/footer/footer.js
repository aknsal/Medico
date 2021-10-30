import React from "react";
import logo from "../../assets/logo.png";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Medico, <i>A Heritage in Care Reputation in Excellence </i> is an
              initiative to help the patients get the best medical care. Medico
              focuses on providing the most efficient way to search for the best
              doctors according to your needs.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="#">Psychiatrist</a>
              </li>
              <li>
                <a href="#">Cardiologist</a>
              </li>
              <li>
                <a href="#">Dietician</a>
              </li>
              <li>
                <a href="#">Dermatologists</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Contribute</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <Link className="navbar-brand" to="/">
            <img src={logo} />
          </Link>
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="#"> Medico</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
