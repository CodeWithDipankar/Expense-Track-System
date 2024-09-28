import React, { useState } from 'react';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Daily Expense Track</Navbar.Brand>
                <Nav className="ml-auto">
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    <Link to="/settings" className="nav-link">Settings</Link>
                    <Button variant="link" onClick={handleShow}>
                        <FaUserCircle size={30} />
                    </Button>
                </Nav>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Profile Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Name: John Doe</p>
                    <p>Email: johndoe@example.com</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default NavbarComponent;
