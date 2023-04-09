import { Container, Row, Col } from "react-bootstrap";
import logo from "./srcs/logo.png";
import "./styles/footer.css";

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <Container>
      <Row>
        <Col>
        </Col>
      </Row>
    </Container>
      <footer className="footer">
        <div className="box">
          <div className="about">
            <h1 className="footer-heading">About</h1>
            <div className="img-div">
              <img src={ logo } className="about-logo" />
            </div>
            <div className="about-para">
              Providing our business partners with full-fledged investment options
              and building world-class distribution and consultancy for leading
              manufacturers in oil, gas, and agriculture
            </div>
          </div>
          <div className="useful-links">
            <h1 className="footer-heading">Useful Links</h1>
            <div className="useful-links-list">
              <ul style={{listStyle: 'none'}}>
                <li><Link to="/" className="ull-item-link">Home</Link></li>
                <li><Link to="/shipping" className="ull-item-link">Shipping</Link></li>
                <li><Link to="/about-us" className="ull-item-link">About Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="contact">
            <h1 className="footer-heading">Contact</h1>
            <div className="about-para" style={{padding: '20px'}}>
              Office 205, Aspect tower, Zone B Business Bay. Boulevard Sheikh
              Mohamed bin Rashid, Boulevard Tower 2 Emaar 17 Floor Dubai
              <br/><br/>
              Email:  <a href="mailto:info@arkan-group.com" target="_blank">info@arkan-group.com</a>
              <br/><br/>
              <a href="https://www.linkedin.com/company/arkan-group-impex/" target="_blank">LinkedIn Profile</a>
            </div>
          </div>
        </div>
        <div className="banner">
             
        </div>
      </footer>
    </>
  );
}

export default Footer;
