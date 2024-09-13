import React from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // Navigate to different sections of the admin panel
  };

  return (
    <>
      {/* Top Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#">Admin Panel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Button variant="outline-light" onClick={() => navigate('/logout')}>
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content with Sidebar */}
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col xs={2} className="bg-light p-3">
            <Nav className="flex-column">
              <Nav.Link onClick={() => handleNavigation('/AdminPanel/booking-table')}>
                <Button variant="primary" block>
                  Bookings
                </Button>
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigation('/AdminPanel/contact-table')}>
                <Button variant="primary" block>
                  Contacts
                </Button>
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigation('/AdminPanel/driver-table')}>
                <Button variant="primary" block>
                  Drivers
                </Button>
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigation('/AdminPanel/users')}>
                <Button variant="primary" block>
                  Users
                </Button>
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigation('/AdminPanel/car-form')}>
                <Button variant="primary" block>
                  Car Form
                </Button>
              </Nav.Link>
            </Nav>
          </Col>

          {/* Content Area */}
          <Col xs={10}>
            <Outlet /> {/* Renders the nested routes' components */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminPanel;
