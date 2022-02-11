import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch {
      console.error("hindi siya naka logout sorry :(");
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"> AcroStock </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

          <div className="mr-4" style={{ color: "white" }}>
            {currentUser.email}
          </div>
          <Button onClick={handleLogout}>logout</Button>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavBar;
