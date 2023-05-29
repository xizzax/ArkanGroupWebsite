import "./styles/forms.css";
import "./styles/admin-login.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { checkData } from "../utils/checkData";

function ViewExistingOption() {
  const [productID, setProductID] = useState("");
  const [isThere, setIsThere] = useState(false);
  const [jsonData, setJsonData] = useState({
    id: 1,
    name: "Example Name",
    description: "This is a sample description.",
  });
  //DUMMY JSON DATA

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

  useEffect(() => {}, [jsonData, isThere]);

  const lookUpID = async (e) => {
    e.preventDefault();

    const {
      bool,
      isPresent: { data },
    } = await checkData(productID);

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
    </Container>
  );
}
export default ViewExistingOption;
