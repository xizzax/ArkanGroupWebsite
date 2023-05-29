import "./styles/shipping.css";
import shipping2 from "./srcs/shipping2.jpg";
import globe from "./srcs/globe.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import FadeInSection from "./fadeinsection";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function Shipping() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm>
            <FadeInSection>
              <Image src={shipping2} fluid />
              <h1 className="shipping-heading">Shipping</h1>
            </FadeInSection>
          </Col>
        </Row>

        {/* first para */}
        <Row>
          {/* <Col sm>
            <FadeInSection>
              <div className="shipping-text">arkan grp with a nice image</div>
            </FadeInSection>
          </Col> */}
          <Col sm>
            <FadeInSection>
              <div class="shipping-text">
                <p>
                  Arkan Group Shipping arm is engaged in the ownership and
                  operation of crude, product, and chemical tankers around the
                  world.{" "}
                </p>
              </div>
            </FadeInSection>
          </Col>
        </Row>

        {/* 2nd para */}
        <Row>
          <Col sm>
            <FadeInSection>
              <div class="shipping-text">
                <p className="catchphrase-box">
                  Arkan Shipping: Strong and Growing
                </p>
                <p>
                  Through an international network of subsidiaries and
                  associated partners, Arkan Group currently owns and operates a
                  fleet of 14 vessels. Our dedicated and experienced team is
                  committed to the very best operating practices and the highest
                  levels of customer service and operational efficiency. The
                  company stands on a solid financial foundation ready to
                  support the business and provide for agile opportunity seeking
                  and well-timed growth.{" "}
                </p>
              </div>
            </FadeInSection>
          </Col>
          <Col sm>
            <FadeInSection>
              <div className="shipping-text image-inside">
                <Image src={globe} fluid className="globe-img" />
              </div>
            </FadeInSection>
          </Col>
        </Row>

        {/* 3rd para */}
        <Row>
          <Col sm>
            <FadeInSection>
              <div className="shipping-text contact-shipper-box">
                As part of shipping norms and requirements, all cargo at Arkan
                Group is certified and tested as a port of shipment. These
                inspections are countersigned by our customer representatives as
                well, prior to loading on the vessel.
              </div>
            </FadeInSection>
          </Col>
          <Col sm>
            <FadeInSection>
              <div class="shipping-text">
                <p>
                  Our fleet provides support shipping services to customers
                  through voyage charters, commercial pools and time charters.
                  It works closely with all stakeholders to understand their
                  needs and strives to exceed their expectations. The Group
                  enjoys close long-term working relationships with its key
                  commercial and technical management partners and views the
                  continued development of these relationships as crucial to its
                  continued success.
                </p>
              </div>
            </FadeInSection>
          </Col>
        </Row>

        {/* 4th para */}
        <Row>
          <Col sm>
            <FadeInSection>
              <div class="shipping-text">
                <p>
                  We believe that its seafarers are as crucial to its success as
                  the team ashore that supports them. Through its technical and
                  commercial management partners and it’s own in-house
                  expertise, we have the global network in place to support its
                  seafarers and deliver shipping services safely and effectively
                  to its customers.
                </p>
              </div>
            </FadeInSection>
          </Col>
          <Col sm>
            <FadeInSection>
              <div className="shipping-text contact-shipper-box">
                Are you a shipper looking for a reliable partner? <br />
                <Link to="/shipper">
                  <Button id="contact-shipper-button"> Contact Us </Button>
                </Link>
              </div>
            </FadeInSection>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Shipping;
