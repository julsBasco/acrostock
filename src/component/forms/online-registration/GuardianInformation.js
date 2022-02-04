import React from "react";
import DropdownItems from "../../DropdownItems";
import { Form } from "react-bootstrap";

const GuardianInformation = () => {
return (

<Form.Group>
          <div className="m-4">
            <h1 style={{ color: "maroon" }}>GUARDIAN INFORMATION</h1>
            <GuardianInformation/>
          
          </div>

          <div className="row">
        <div className="col">
          <Form.Label>Guardian Information</Form.Label>
          <Form.Control type="number" placeholder="Guardian Information" />
        </div>
</div>
        </Form.Group>

);
  
};

export default GuardianInformation;
