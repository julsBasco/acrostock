import React from "react";
import { Form, Button } from "react-bootstrap";
import Address from "../component/forms/online-registration/Address";
import BasicInformation from "../component/forms/online-registration/BasicInformation";
import ContactDetails from "../component/forms/online-registration/ContactDetails";
import GuardianInformation from "../component/forms/online-registration/GuardianInformation";

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

          <div className="m-4">
            <h1 style={{ color: "maroon" }}>GUARDIAN INFORMATION</h1>
            <GuardianInformation />
          </div>
        </Form>
      </div>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-3">
            <div className="row justify-content-center text-center">
              <Button variant="success" size="lg">
                Success
              </Button>
              <h6>
                Already have and account?{" "}
                <span>
                  <a>Login</a>
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineRegistration;
