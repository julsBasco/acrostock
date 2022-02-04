import React from "react";
import { Form } from "react-bootstrap";
import Address from "../component/forms/online-registration/Address";
import BasicInformation from "../component/forms/online-registration/BasicInformation";
import ContactDetails from "../component/forms/online-registration/ContactDetails";
const OnlineRegistration = () => {
  return (
    <div>
      <div className="container">
        <Form>
          <div className="m-4">
            <h1 style={{ color: "maroon" }}>BASIC INFORMATION</h1>
            <BasicInformation />
          </div>
          <div className="m-4">
            <h1 style={{ color: "maroon" }}>ADDRESS</h1>
            <Address />
          </div>

          <div className="m-4">
            <h1 style={{ color: "maroon" }}>CONTACT DETAILS</h1>
            <ContactDetails />
          </div>

        </Form>
      </div>
    </div>
  );
};

export default OnlineRegistration;
