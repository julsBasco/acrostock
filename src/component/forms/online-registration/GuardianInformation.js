import React from "react";
import { Form } from "react-bootstrap";

const GuardianInformation = () => {
  return (
    <Form.Group>
      <div className="row">
        <div className="col">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </div>
        <div className="col">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control type="text" placeholder="Middle Name" />
        </div>
        <div className="col">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" placeholder="Mobile Number" />
        </div>
        <div className="col">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Email Address" />
        </div>
        <div className="col">
          <Form.Label>Occupation</Form.Label>
          <Form.Control type="text" placeholder="(optional)" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form.Label>Home Address</Form.Label>
          <Form.Control type="text" placeholder="Home Address" />
        </div>
      </div>
    </Form.Group>
  );
};

export default GuardianInformation;
