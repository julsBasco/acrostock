import { useEffect, useRef } from "react";
import { Form, Button, Modal, Table } from "react-bootstrap";
import { useState } from "react/cjs/react.development";
import "./App.css"
import { useAuth } from "./context/AuthContext";

function App() {
  const { currentUser, login, logout, newUser, getUsers } = useAuth();
  const [userData, setUserData] = useState([]);

  const [show, setShow] = useState(true); // for Modal

  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await login(loginEmailRef.current.value, loginPasswordRef.current.value)
      setShow(!show);
    } catch {
      console.error("Login failure");
    }
  }

  const handleClose = () => { // for Modal
    setShow(!show);
  }

  const handleLogout = async () => {
    try {
      await logout()
      loginEmailRef.current.value = "";
      loginPasswordRef.current.value = "";
      setShow(!show); // for Modal
    } catch {
      console.error("Logout failed");
    }
  }

  const handleRegister = async () => {
    try {
      await newUser(loginEmailRef.current.value, loginPasswordRef.current.value);
      setShow(!show);
      loginEmailRef.current.value = "";
      loginPasswordRef.current.value = "";
    } catch {
      console.error("Register failed");
    }
  }

  const loadUsers = async () => {
    const userDatas = await getUsers()
    
    userDatas.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

    // try {
    //   const userDatas = await getUsers()
    //   console.log(userDatas.data())
    // } catch {
    //   console.error("Loading Users Error");
    // }
  }
  
  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div>

      {currentUser ?
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Login Firebase</Modal.Title>
          </Modal.Header>
          <Modal.Body>Welcome {currentUser.email}!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Modal.Footer>
        </Modal >
        :
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Login Firebase</Modal.Title>
          </Modal.Header>
          <Modal.Body>Please login your firebase authentication</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      }


      <Form className="loginUserForm" onSubmit={loginHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={loginEmailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Login Firebase User
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={loginPasswordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        {currentUser ? <Button variant="danger" type="button" onClick={handleLogout}>
          Logout
        </Button> : <Button variant="warning" type="button" onClick={handleRegister}>Register</Button>}

      </Form>

      <br />
      <Table striped bordered hover size="sm" responsive="sm" variant="dark" style={{ width: 'auto', margin: 'auto' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact No</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>09213764343</td>
            <td>markotto@email.com</td>
            <td>Red Stone Street</td>
          </tr>
        </tbody>
      </Table>

    {/* Removed the Load Table button */}
    {/* This is a comment */}



    </div >
  );
}

export default App;
