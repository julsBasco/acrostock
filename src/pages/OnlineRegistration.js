import React from "react";
import { Form } from "react-bootstrap";
import BasicInformation from "../component/forms/online-registration/BasicInformation";

const OnlineRegistration = () => {
  return (
    <div>
      <div className="container">
        <Form>
          <h1 style={{ color: "maroon" }}>BASIC INFORMATION</h1>
          <BasicInformation />
        </Form>
      </div>
    </div>
  );
};

export default OnlineRegistration;
