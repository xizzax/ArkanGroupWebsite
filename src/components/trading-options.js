import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles/trading-options.css";
function TradingOptions() {
  return (
    <div>
      <Container>
        <Row>
          <Col md>
            <h1 className="trading-options-heading">Edit Trading Options</h1>
          </Col>
        </Row>
        <Row>
          <Col md>
            <div className="div-buttons">
              <div className="btns">
                <Button>Add a new trading option</Button>
              </div>
              <div className="btns">
                <Button>Edit an existing trading option</Button>
              </div>
              <div className="btns">
                <Button>Delete an existing trading option</Button>
              </div>
            </div>
              </Col>
              <Col md>
            <div className="div-buttons">

              <div className="btns">
                <Button>View Product IDs</Button>
              </div>
              <div className="btns">
                <Button>View an existing trading option</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TradingOptions;
