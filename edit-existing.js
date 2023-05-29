import { Container, Row, Col } from "react-bootstrap";
import "./styles/forms.css";
import "./styles/admin-login.css";
import { useState } from "react";

import { db } from "../firebase";
import { checkData } from "../utils/checkData";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

function EditExistingOption() {
  const [productID, setProductID] = useState("");
  // const [jsonData, setJsonData] = useState({
  //   id: 1,
  //   name: "Example Name",
  //   description: "This is a sample description.",
  // });

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");

  async function updateProducts() {
    const { bool, isPresent } = await checkData(productID);

    if (!bool) {
      console.log("IM IN");
      alert("Product Not Exists");
      return;
    }

    console.log("IM OUT");


    const docRef = doc(db, "products", isPresent?.id);
    await updateDoc(docRef, {
      productID,
      productName,
      productDescription,
    });

    alert("Data Updated");
  }

  const lookUpID = async (e) => {
    e.preventDefault();

    await updateProducts();
  };

  // const handleAddNew = async (e) => {
  //   e.preventDefault();

  //   await lookUpID();
  //   // console.log(productName);
  //   // console.log(productDescription);
  //   // console.log("updated");

  //   // //WALEED: UPDATE DATA WITH THIS ID AT BACKEND
  //   // console.log("updated");

  //   await updateProducts(productID);
  // };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="admin-login-heading">
            {" "}
            Edit an Existing Trading Option
          </h1>
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
              {/* <input type="submit" value="Look Up" className="btns-forms" /> */}
              {/* </form>
          </div>
        </Col>
      </Row> */}

              {/* <Row>
        <Col md>
          <div className="form-div">
            <form onSubmit={handleAddNew} className="admin-login-form"> */}
              {/* <label className="warning-note">
                Note: Leave field empty if you do not want to change it
              </label> */}
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
