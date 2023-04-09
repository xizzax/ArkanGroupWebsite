import "./styles/body.css";
import "./styles/home.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import chairman from "./srcs/chairman.png";
import refinery from "./srcs/refinery.jpg";
import ImageGallery from "./image-gallery-home";

// this function is used to fade in the text when the user scrolls down
function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(`entry`, entry, `is = ${entry.isIntersecting}`);
        setVisible(entry.isIntersecting);
      });
    });

    const { current } = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function Home() {
  return (
    <>
      <Container fluid>
        {/* put this in a separate component maybe?? */}
        <FadeInSection>
          <Row className="margin1 imggallery">
            <ImageGallery />
          </Row>
        </FadeInSection>
        <FadeInSection>
          <Row className="margin1">
            <Col md>
              <h1>Who We Are</h1>
              <div className="div-text">
                A leader in international trade, oil & gas, and agriculture, we
                provide our business partners with full-fledged investment
                options. The combination of our expertise and our presence in
                markets regionally and globally makes us an effective channel
                that identify and execute the knowledge of trade marketing,
                export management, and consultancy for our clients.
                <br></br>
                <img
                  src={refinery}
                  width="100%"
                  height="50%"
                  id="refinery"
                  alt="refinery"
                />
              </div>
              <h1>Our Mission</h1>
              <div className="div-text">
                To build world-class distribution and consultancy for leading
                manufacturers in selected industries.
              </div>
            </Col>

            <Col md>
              <div className="singleColumn">
                {/* put this in a separate component maybe?? */}
                <h1>Our Chairman</h1>
                <div className="div-text">
                  <img src={chairman} width="50%" height="50%" alt="chairman" />
                  <br />
                  Sheikh Khalifa Khaled Zayed Saquer Al-Nahyan is a member of
                  the Al Nahyan family which is one of the ruling families of
                  the United Arab Emirates. Sheikh Khalifa is currently the
                  Chief Executive Officer of Bin Zayed Energy, one of the
                  largest privately held companies in the UAE, headquartered in
                  Dubai. On September 2020, he was appointed as the Vice
                  Chairman of the Board of Directors- Al Firdous Company
                  Holdings.
                  <br />
                  <br />
                  Under His Excellency’s guidance and following his vision,
                  Arkan Group is aiming to become a UAE model business
                  ambassador in the European markets through Greece and Balkan
                  Counties and also to the east with already established trading
                  routes in China, India, Malaysia and other countries.
                </div>
              </div>
            </Col>
          </Row>
        </FadeInSection>
      </Container>
    </>
  );
}

export default Home;
