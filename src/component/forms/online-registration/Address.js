import React from "react";
import { Form } from "react-bootstrap";
import DropdownItems from "../../DropdownItems";

const Address = () => {
  return (
    <Form.Group>
      <div className="row">
        <div className="col">
          <Form.Label>House Number</Form.Label>
          <Form.Control type="text" placeholder="House number" />
        </div>
        <div className="col">

          <Form.Label>Street</Form.Label>
          <Form.Control type="text" placeholder="Street" />
        </div>
        <div className="col">
          <Form.Label>Baranggay</Form.Label>
          <Form.Control type="text" placeholder="Baranggay" />
        </div>
      </div>
    </Form.Group>
  );
};

export default Address;
