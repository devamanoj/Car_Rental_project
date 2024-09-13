//userpanel.jsx

import React from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';

const UserPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logout
    console.log('Logged out');
    navigate('/signin'); // Redirect to Sign In page
  };

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Rental Car Dashboard</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Content with Sidebar */}
      <Container fluid className="mt-4">
        <Row>
          {/* Left Sidebar */}
          <Col xs={2} className="bg-light p-3">
            <Nav className="flex-column">
              <Nav.Link onClick={() => handleButtonClick('/UserPanel/carslist')} className="mb-2">
                <Button variant="primary" block>
                  View Cars
                </Button>
              </Nav.Link>
              <Nav.Link onClick={() => handleButtonClick('/UserPanel/booked-car/:id')} className="mb-2">
                <Button variant="primary" block>
                  My Bookings
                </Button>
              </Nav.Link>
              <Nav.Link onClick={() => handleButtonClick('/UserPanel/contact')} className="mb-2">
                <Button variant="primary" block>
                  Contact
                </Button>
              </Nav.Link>
              <Nav.Link className="mb-2">
                <Button variant="danger" block onClick={handleLogout}>
                  Logout
                </Button>
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={10}>
            <Outlet /> {/* Renders the nested routes' components */}
          </Col>
          {/* Main Content Area */}
          <Col xs={10} className="text-center">
            <h2>Welcome to the Rental Car Dashboard!</h2>
            <p>Use the navigation on the left to manage your car bookings, view available cars, or update your profile.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserPanel;
