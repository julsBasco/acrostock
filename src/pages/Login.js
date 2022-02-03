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

        <div className="col h-200 bg-primary d-flex justify-content-center align-items-center">
          <div className="">
            <img
              className="img-fluid"
              src="https://3401zs241c1u3z7ulj3z6g7u-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/sean-pollock-PhYq704ffdA-unsplash-scaled-1-980x654.jpg"
              alt="acrostockbuilding"
            />
          </div>
        </div>

        <div className="col h-200 d-flex justify-content-center align-items-center">

          <div className="container-flush ">
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
