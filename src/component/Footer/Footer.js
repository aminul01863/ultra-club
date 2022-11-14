import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className=" d-flex justify-content-center footer-info p-3">
      <div class="row container d-flex justify-content-center m-2 text-light">
        <div class="col-sm-4">
          <div class="">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="">
            <div class="card-body">
              <p class="card-text link-text text-md-start">
                <a href="Blog">Blog</a>
                <br />
                <a href="Blog">Success</a>
                <br />
                <a href="Blog">About us</a>
                <br />
                <a href="Blog">Refund policy</a>
                <br />
                <a href="Blog">Terms and Conditions</a>
                <br />
                <a href="Blog">Privacy & App Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3 text-light">
          <small>Copyright © 2022 Aminul Islam</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
