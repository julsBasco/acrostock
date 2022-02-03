import React from "react";
import LoginForm from "../component/forms/LoginForm";
import "../css/Login.css";

const Login = () => {
  return (
    <div className="container-flush">
      <div
        style={{ height: "100vh" }}
        className="row align-items-center justify-content-center"
      >
        <div className="col h-100 bg-primary d-flex justify-content-center align-items-center">
          <div className="background-cover">
            <img
              className="img-fluid"
              src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
              alt="a figure of a man with a dog in the mountains"
            />
          </div>
        </div>
        <div className="col h-100 d-flex justify-content-center align-items-center">
          <div className="container-flush justify-content-center">
            <img
              className="img-fluid rounded-circle size-small"
              src="https://cdn5.vectorstock.com/i/1000x1000/71/59/simple-geometric-blue-waves-circle-round-logo-vector-30137159.jpg"
            />
            <h5>Welcome Back</h5>
            <h3>Login to your account</h3>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
