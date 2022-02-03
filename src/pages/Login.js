import React from "react";
import "../css/Login.css";

const Login = () => {
  return (
    <div className="container-flush">
      <div className="row align-items-center justify-content-center">
        <div className="col">
          <figure>
            <img
              className="img-fluid"
              src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
              alt="a figure of a man with a dog in the mountains"
            />
          </figure>
        </div>
        <div className="col">
          <div className="container">
            <img
              className="img-fluid rounded-circle size-small"
              src="https://cdn5.vectorstock.com/i/1000x1000/71/59/simple-geometric-blue-waves-circle-round-logo-vector-30137159.jpg"
            />
            <h5>Welcome Back</h5>
            <h3>Login to your account</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
