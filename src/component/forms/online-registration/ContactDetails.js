import React from "react";
import DropdownItems from "../../DropdownItems";
import { Form } from "react-bootstrap";

function ContactDetails() {
  return (

    <Form.Group>
      <div className="row">
        <div className="col">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text" placeholder="Mobile number" />
        </div>

      </div>
    </Form.Group>
  );



}

export default ContactDetails;
