import { Container, Row, Col } from "react-bootstrap";
import "./styles/forms.css";
import "./styles/admin-login.css";
import { useState } from "react";

import { db } from "../firebase";
import { checkData } from "../utils/checkData";
import { collection, addDoc } from "firebase/firestore";

function AddNewOption() {
  const [productID, setProductID] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");

  async function addProducts() {
    const { bool } = await checkData(productID);

    if (bool) {
      alert("Data Already Exists");
      return;
    }

    console.log("IM OUT");
    await addDoc(collection(db, "products"), {
      productID,
      productName,
      productDescription,
    });

    alert("Data Added");
  }

  const handleAddNew = async (e) => {
    e.preventDefault();

    await addProducts();
  };

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
            <form onSubmit={handleAddNew} className="admin-login-form">
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

              <input
                type="submit"
                value="Add New Option"
                className="btns-forms"
              />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default AddNewOption;
