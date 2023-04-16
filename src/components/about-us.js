import "./styles/about-us.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./srcs/logo.png";
import Button from "react-bootstrap/Button";
import FadeInSection from "./fadeinsection";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <div className="about-us-main">
      <Container fluid>
        <Row>
          <Col lg>
          <FadeInSection>
            <img src={logo} alt="logo" className="logo" />
            </FadeInSection>
          </Col>
        </Row>
        <Row>
          <Col lg>
            <FadeInSection>
              <h1>Arkan Group of Companies - About Us</h1>
            </FadeInSection>
          </Col>
        </Row>
        <Row>
          
            <Col lg>
            <FadeInSection>
              <h2> We Are Global </h2>
              <p className="about-us-paragraph">
                As a leader in the fields of international trade, energy,
                petroleum, and agriculture, we provide our business partners
                with a wide range of investment options. Our mission is to build
                world-class distribution and consultancy for leading
                manufacturers in selected industries. The combination of our
                expertise and our presence in markets regionally and globally
                makes us an effective channel that identify and execute the
                knowledge of trade marketing, export management, and consultancy
                for our clients.
                <br />
                <br />
                Our multi-lingual investment, sales, marketing and management
                consultancy professionals are spread across locations in the{" "}
                <b> Middle East, Africa, America and the Gulf regions</b>.
                Account managers are assigned to one of our stand-alone business
                portfolios, including, but not limited to, oil and gas,
                renewable energy, retail, and hospitality.
              </p>
              </FadeInSection>
            </Col>
            <Col lg>
            <FadeInSection>
              <h2> Want to learn more? </h2>
              <div className="div-buttons">
                <div className="btns">
                  <Button
                    to="/contact-us"
                    //   href="https://www.arkangroup.com/about-us/""
                    target="_blank"
                  >
                    Contact Us
                  </Button>
                </div>
                <div className="btns">
                  <Button
                    variant="primary"
                    href="https://www.arkangroup.com/about-us/"
                    target="_blank"
                  >
                    Learn more about trading options
                  </Button>
                </div>
                <div className="btns">
                  <Button
                    variant="primary"
                    href="https://www.arkangroup.com/about-us/"
                    target="_blank"
                  >
                    Learn more about shipping options
                  </Button>
                </div>
                <div className="btns">
                  <Button
                    variant="primary"
                    href="https://www.arkangroup.com/about-us/"
                    target="_blank"
                  >
                    Click here if you are a supplier
                  </Button>
                </div>
                <div className="btns">
                  <Button
                    variant="primary"
                    href="https://www.arkangroup.com/about-us/"
                    target="_blank"
                  >
                    Click here if you are a shipper
                  </Button>
                </div>
              </div>
              </FadeInSection>
            </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
