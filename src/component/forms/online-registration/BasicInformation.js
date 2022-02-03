import React from "react";
import DropdownItems from "../../DropdownItems";
import { Form } from "react-bootstrap";

const BasicInformation = () => {
  return (
    <Form.Group>
      <div className="row">
        <div className="col">
          <Form.Label>Identification</Form.Label>
          <DropdownItems title="--select type--" item={["item1", "item2"]} />
        </div>
      </div>

      <div>
        <div className="row">
          <div className="col">
            <Form.Label>Year Level</Form.Label>
            <DropdownItems title="--select level--" item={[1, 2, 3, 4]} />
          </div>
          <div className="col">
            <Form.Label>Section or Course</Form.Label>
            <DropdownItems
              title="--Select sec/course--"
              item={["BSED", "BSIT", "BSHRM"]}
            />
          </div>
          <div className="col">
            <Form.Label>Student Id</Form.Label>
            <Form.Control
              type="number"
              placeholder="enter your student number"
            />
          </div>
        </div>
      </div>

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

      <div>
        <div className="row">
          <div className="col">
            <Form.Label>Gender</Form.Label>
            <DropdownItems
              title="--select gender--"
              item={["male", "female"]}
            />
          </div>
          <div className="col">
            <Form.Label>Civil Status</Form.Label>
            <DropdownItems
              title="--Select Status--"
              item={["single", "married", "widowed"]}
            />
          </div>
          <div className="col">
            <Form.Label>Citezenship</Form.Label>
            <Form.Control type="text" placeholder="e.g Filipino" />
          </div>
        </div>
      </div>

      <div>
        <div className="row">
          <div className="col">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" placeholder="Birthday" />
          </div>
          <div className="col">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="age" />
          </div>
          <div className="col">
            <Form.Label>Birth Place</Form.Label>
            <Form.Control type="text" placeholder="Place of Birth" />
          </div>
        </div>
      </div>
    </Form.Group>
  );
};

export default BasicInformation;