import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useLocation, Link } from "react-router-dom";
import React from "react";
import "./styles/admin-dashboard.css";

function AdminDashboard() {
  const location = useLocation();
  const { username, password } = location.state;
  const navigate = useNavigate();

  const goToCredentialsPage = () => {
    navigate("/change-credentials", {
      state: { username, password },
    });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md>
            <h1 className="admin-dashboard-heading">Admin Dashboard</h1>
          </Col>
        </Row>

        <Row>
          <Col md>
            <div className="div-buttons">
              <div className="btns">
                <Link to="/trading-options">
                  <Button>Edit trading options</Button>
                </Link>
              </div>
              <div className="btns">
                <Button onClick={goToCredentialsPage}>
                  Change Username or Password
                </Button>
              </div>
            </div>
          </Col>

          <Col md>
            <div className="div-buttons">
              <div className="btns">
                <Link to="/view-supplier">
                  <Button>View supplier form submissions</Button>
                </Link>
              </div>

              <div className="btns">
                <Link to="/view-shipper">
                  <Button>View shipper form submissions</Button>
                </Link>
              </div>

              <div className="btns">
                <Link to="/view-contact">
                  <Button>View contact form submissions</Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminDashboard;
