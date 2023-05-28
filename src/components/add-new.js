import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles/forms.css";
import "./styles/admin-login.css";
import { useState } from "react";

function AddNewOption() {

    const [productID, setProductID] = useState("");
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");

    const handleAddNew = (e) => {
        e.preventDefault();
        console.log("Add new option");
        console.log(productID);
        console.log(productName);
        console.log(productDescription);

        //WALEED: CHECK IF PRODUCT ID ALREADY EXISTS IN DATABASE
        // if product exists, show error message using window.alert()
        //WALEED: Add code here to send data to backend
    }


  return (
    <Container>
      <Row>
        <Col>
          <h1 className="admin-login-heading"> Add a New Trading Option</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="form-div">
            <form
              onSubmit={handleAddNew}
              className="admin-login-form"
            >
                <label htmlFor="productID">Product ID</label>
                <input

                    type="text"
                    name="productID"
                    id="productID"
                    placeholder="Enter Product ID"
                    onChange={(e) => setProductID(e.target.value)}
                    value={productID}
                    required
                />
                <label htmlFor="productName">Product Name</label>
                <input
                    type="text"
                    name="productName"

                    id="productName"
                    placeholder="Enter Product Name"
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                    required
                />
                <label htmlFor="productDescription">Product Description</label>
                <input

                    type="text"
                    name="productDescription"
                    id="productDescription"
                    placeholder="Enter Product Description"
                    onChange={(e) => setProductDescription(e.target.value)}
                    value={productDescription}
                    required
                />

              <input type="submit" value="Add New Option" className="btns-forms" />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default AddNewOption;
