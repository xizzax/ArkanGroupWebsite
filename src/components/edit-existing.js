import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles/forms.css";
import "./styles/admin-login.css";
import { useState } from "react";

function EditExistingOption() {
  const [productID, setProductID] = useState("");
  const [jsonData, setJsonData] = useState({

    id: 1,
    name: "Example Name",
    description: "This is a sample description.",
  }); 
  //DUMMY JSON DATA
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const lookUpID = (e) => {
    e.preventDefault();

    console.log("Look up ID");
    console.log(productID);

    //WALEED: CHECK IF PRODUCT ID ALREADY EXISTS IN DATABASE
    //WALEED: if product does NOT exist, show error message using window.alert()
    //WALEED: if product exists, store product details in a JSON OBJECT called jsonData 

    setProductDescription(jsonData.description);
    setProductName(jsonData.name);

  };

  

  const handleAddNew = (e) => {
      e.preventDefault();
      console.log(productName);
      console.log(productDescription);
      console.log("updated");

      //WALEED: UPDATE DATA WITH THIS ID AT BACKEND
      console.log("updated");

  }
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="admin-login-heading"> Edit an Existing Trading Option</h1>
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
            <form
              onSubmit={handleAddNew}
              className="admin-login-form"
            >
                <label className="warning-note">
                    Note: Leave field empty if you do not want to change it
                </label>
                <label htmlFor="productName">Product Name</label>
                <input
                    type="text"
                    name="productName"

                    id="productName"
                    placeholder={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                    required
                />
                <label htmlFor="productDescription">Product Description</label>
                <input

                    type="text"
                    name="productDescription"
                    id="productDescription"
                    placeholder={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    value={productDescription}
                    required
                />

              <input type="submit" value="Save" className="btns-forms" />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default EditExistingOption;
