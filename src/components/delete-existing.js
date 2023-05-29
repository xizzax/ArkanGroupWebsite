import "./styles/forms.css";
import "./styles/admin-login.css";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { checkData } from "../utils/checkData";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

function DeleteExistingOption() {
  const [productID, setProductID] = useState("");
  const [isThere, setIsThere] = useState(false);
  const [jsonData, setJsonData] = useState({
    id: 1,
    name: "Example Name",
    description: "This is a sample description.",
  });
  const [databaseID, setDatabaseID] = useState(0);

  const content = isThere ? (
    <Row>
      <Col md>
        <div className="form-div">
          <p>
            <b>
              <i>Product ID: </i>
            </b>
            {jsonData?.id}
          </p>
          <p>
            <b>
              <i>Product Name: </i>
            </b>
            {jsonData?.name}
          </p>
          <p>
            <b>
              <i>Product Description: </i>
            </b>
            {jsonData?.description}
          </p>
        </div>
      </Col>
    </Row>
  ) : (
    <div>...</div>
  );

  useEffect(() => {}, [jsonData, isThere, databaseID]);

  const lookUpID = async (e) => {
    e.preventDefault();

    const {
      bool,
      isPresent: { id, data },
    } = await checkData(productID);

    setDatabaseID(id);

    if (!bool) {
      console.log("IM IN");
      alert("Product Not Exists");
      return;
    }

    setJsonData({
      id: data?.productID,
      name: data?.productName,
      description: data?.productDescription,
    });

    setIsThere(bool);
  };

  async function deleteProducts() {
    console.log("ID Database", databaseID);

    if (!databaseID) return alert("Product Not Exist");

    await deleteDoc(doc(db, "products", `${databaseID}`));

    alert("Product Deleted");
  }

  const deleteExisting = async (e) => {
    e.preventDefault();

    await deleteProducts();
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

      {content}

      <Row>
        <Col>
          <div className="form-div">
            <form className="admin-login-form" onSubmit={deleteExisting}>
              <input
                type="submit"
                value="DELETE OBJECT"
                className="btns-forms"
              />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default DeleteExistingOption;
