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

      <div className="row">
        <div className="col">
          <Form.Label>City/Municipality</Form.Label>
          <Form.Control type="text" placeholder="City/Municipality" />
        </div>
        <div className="col">
          <Form.Label>Province</Form.Label>
          <Form.Control type="text" placeholder="Province" />
        </div>
        <div className="col">
          <Form.Label>Zip Code</Form.Label>
          <Form.Label type="number" placeholder="Zip Code" />
        </div>
      </div>


    </Form.Group>
  );
};

export default Address;
