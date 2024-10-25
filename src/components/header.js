import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

export default function AppHeader() {
    // State to control the visibility of the navbar collapse
    const [expanded, setExpanded] = useState(false);

    // Function to toggle the navbar
    const handleToggle = () => setExpanded(!expanded);

    // Function to close the navbar
    const closeNavbar = () => setExpanded(false);

    return (
        <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
            <Container>
                <Navbar.Brand>
                    <Nav.Link href="/" onClick={closeNavbar}>
                        <img
                            src="logo512.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="WebEx"
                            style={{ cursor: 'pointer' }} // Optional: change the cursor to a pointer
                        />
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" onClick={closeNavbar}>Home</Nav.Link>
                        <Nav.Link href="#about" onClick={closeNavbar}>About</Nav.Link>
                        <Nav.Link href="#services" onClick={closeNavbar}>Services</Nav.Link>
                        <Nav.Link href="#works" onClick={closeNavbar}>Works</Nav.Link>
                        <Nav.Link href="#team" onClick={closeNavbar}>Team</Nav.Link>
                        <Nav.Link href="#testimonials" onClick={closeNavbar}>Testimonial</Nav.Link>
                        <Nav.Link href="#pricing" onClick={closeNavbar}>Pricing</Nav.Link>
                        <Nav.Link href="#blog" onClick={closeNavbar}>Blog</Nav.Link>
                        <Nav.Link href="#contact" onClick={closeNavbar}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
