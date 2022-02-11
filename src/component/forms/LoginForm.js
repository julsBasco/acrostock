import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Dropdown } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      navigate("/", { replace: true });
    } catch {
      setLoading(false);
      console.error("hindi nagtuloy ang iyong login");
    }
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          ref={emailRef}
          type="email"
          placeholder="Enter email"
          disabled={loading}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          ref={passwordRef}
          type="password"
          placeholder="Password"
          disabled={loading}
        />
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
      <div className="row justify-content-end">
        <div className="col">
          <div className="row justify-content-center text-center">
            <Button type="submit" variant="success" size="lg">
              Login
            </Button>
            <h6>
              Already have and account?{" "}
              <span>
                <Link to={"/create"}> Create account</Link>
              </span>
            </h6>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
