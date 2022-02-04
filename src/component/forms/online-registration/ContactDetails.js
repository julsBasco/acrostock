import React from "react";
import DropdownItems from "../online-registration/ContactDetails.js";
import { Form } from "react-bootstrap";

function ContactDetails() {
  return (

    <Form.Group>
      <div className="row">
        <div className="col">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" placeholder="Mobile number" />
        </div>
</div>
        <div className="col">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
            />
          </div>

          <div className="col">
            <Form.Label>FB Account</Form.Label>
            <Form.Control
              type="text"
              placeholder="FB Account"
            />
          </div>


      </Form.Group>
  );

}

export default ContactDetails;
