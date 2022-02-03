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
          <DropdownItems title="--select type--" item={["item1", "item2"]} />
        </div>
        <div className="col">
          <Form.Label>Baranggay</Form.Label>
          <DropdownItems title="--select type--" item={["item1", "item2"]} />
        </div>
      </div>
    </Form.Group>
  );
};

export default Address;