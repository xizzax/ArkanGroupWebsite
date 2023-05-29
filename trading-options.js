import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles/trading-options.css";
import { Link } from "react-router-dom";
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
                <Link to="/add-new">
                <Button>Add a new trading option</Button>
                </Link>
              </div>
              <div className="btns">
                <Link to="/edit-existing">
                <Button>Edit an existing trading option</Button>
                </Link>
              </div>
              <div className="btns">
                <Link to="/delete-existing">
                <Button>Delete an existing trading option</Button>
                </Link>
              </div>
            </div>
              </Col>
              <Col md>
            <div className="div-buttons">

              <div className="btns">
                <Link to="/view-ids">
                <Button>View Product IDs</Button>
                </Link>
              </div>

              <div className="btns">
                <Link to="/view-existing">
                <Button>View an existing trading option</Button>
                </Link>
              </div>

              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TradingOptions;
