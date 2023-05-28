import "./styles/forms.css";
import "./styles/admin-login.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function ViewExistingOption() {
  const [productID, setProductID] = useState("");
  const [jsonData, setJsonData] = useState({
    id: 1,
    name: "Example Name",
    description: "This is a sample description.",
  }); 
  //DUMMY JSON DATA
 

  const lookUpID = (e) => {
    e.preventDefault();

    console.log("Look up ID");
    console.log(productID);

    //WALEED: CHECK IF PRODUCT ID ALREADY EXISTS IN DATABASE
    //WALEED: if product does NOT exist, show error message using window.alert()
    //WALEED: if product exists, store product details in a JSON OBJECT called jsonData 

    
    //re-render page with product details

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
            <form className="admin-login-form" onSubmit={lookUpID}>
              <label htmlFor="productID">Search by Product ID</label>
              <input
                type="text"
                name="productID"
                id="productID"
                placeholder="Enter Product ID"
                onChange={(e) => setProductID(e.target.value)}
                value={productID}
                required
              />
              <input type="submit" value="Look Up" className="btns-forms" />
            </form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md>
          <div className="form-div">
            <p><b><i>Product ID: </i></b>{jsonData.id}</p>
            <p><b><i>Product Name: </i></b>{jsonData.name}</p>
            <p><b><i>Product Description: </i></b>{jsonData.description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default ViewExistingOption;
