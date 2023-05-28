import "./styles/forms.css";
import "./styles/admin-login.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";


function ViewAllIDs(){
    const [productID, setProductID] = useState("");
  const [jsonData, setJsonData] = useState({
    ids: [1, 2, 3, 4, 5],
  }); 
  //DUMMY JSON DATA
 

  const lookUpIDs = (e) => {
    e.preventDefault();


    //WALEED: get all ids from database and store is jsonData

  };
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="admin-login-heading">View Existing</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="form-div">
            <form className="admin-login-form" onSubmit={lookUpIDs}>
              
              <input type="submit" value="Get All Product IDs" className="btns-forms" />
            </form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md>
          <div className="form-div">
            <p><b><i>All product IDS:</i></b></p>
          <ul>
        {jsonData.ids.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewAllIDs;