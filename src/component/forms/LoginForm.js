import React from "react";
import { Form, Button, Dropdown } from "react-bootstrap";
const LoginForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Sign In as
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      
      
    
      <Dropdown.Item href="#/action-2">Student</Dropdown.Item>
      <Dropdown.Item href="#/action-3">School Admin</Dropdown.Item>
      
      <Dropdown.Item href="#/action-4">Teachers</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
