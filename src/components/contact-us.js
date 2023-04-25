import { Col, Container, Image, Row } from "react-bootstrap";
import "./styles/contact-us.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import mailIcon from "./srcs/mail-icon.png";
import linkedInIcon from "./srcs/linkedin-icon.png";
import networkIcon from "./srcs/network-icon.png";
import ContactForm from "./contactform";
function ContactUs() {
  return (
    <div className="about-us-main">
      <h1>Contact Us</h1>
      <div className="contact-us-para">Get in touch!</div>
      <Container>
        <Row>
          {/* form goes here */}
          <Col md>
            <ContactForm />
          </Col>

          {/* button links go here */}
          <Col md>
            <div className="div-buttons">
              <div className="btns">
                <Button
                  href="mailto:200779@students.au.edu.pk"
                  target="_blank"
                  className="email-button"
                >
                  <img src={mailIcon} alt="mail icon" className="mail-icon" />{" "}
                  Email Us
                </Button>
              </div>

              <div className="btns">
                <Button
                  href="https://www.linkedin.com/company/arkan-group-impex/"
                    target="_blank"
                  className="email-button"
                >
                  <img
                    src={linkedInIcon}
                    alt="linkedin icon"
                    className="mail-icon"
                  />{" "}
                  Connect with us on LinkedIn
                </Button>
              </div>

              <div className="btns">
                <Link to="/supplier">
                  <Button className="email-button">
                    <img
                      src={networkIcon}
                      alt="network icon"
                      className="mail-icon"
                    />{" "}
                    Connect with us as a supplier
                  </Button>
                </Link>
              </div>
              <div className="btns">
                <Link to="/shipper">
                  <Button className="email-button">
                    <img
                      src={networkIcon}
                      alt="network icon"
                      className="mail-icon"
                    />{" "}
                    Connect with us as a shipper
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
