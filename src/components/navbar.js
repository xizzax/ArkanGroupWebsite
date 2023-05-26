//import everything from bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import logo from "./srcs/logo.png";
import "./styles/navbar.css";

// import Home from "./home";
// import AboutUs from "./about-us";
// import Shipping from "./shipping";
// import Agro from "./agro";
// import Fertilizer from "./fertilizer";
// import OilGas from "./oil-gas";
// import ContactUs from "./contact-us";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      
        <Navbar className="myNavBar" expand="lg" sticky="top" >
          <Container>
            {/* adding the logo  */}
            <Navbar.Brand href="/">
              <img src={logo} width="75" height="75" alt="arkan logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" className="link-name">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/about-us" className="link-name">About Us</Nav.Link>
                <Nav.Link as={NavLink} to="/shipping" className="link-name">Shipping</Nav.Link>
                <NavDropdown title="Trading" id="basic-nav-dropdown" className="link-name">
                  <NavDropdown.Item as={NavLink} to="/agro">
                    Agro Commodities
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/fertlizer">
                    Fertilizers
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/oil-gas">Oil & Gas</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={NavLink} to="/contact-us" className="link-name">Contact Us</Nav.Link>
                <Nav.Link as={NavLink} to="/admin-login" className="link-name">Admin Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}
export default NavBar;
