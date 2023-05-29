import "./styles/forms.css";
import "./styles/admin-login.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function ViewAllIDs() {
  const [productID, setProductID] = useState("");
  const [jsonData, setJsonData] = useState([]);
  //DUMMY JSON DATA

  const lookUpIDs = async (e) => {
    e.preventDefault();

    const querySnapshot = await getDocs(collection(db, "products"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));

    console.log("data --> ", data);
    setJsonData(data);

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
              <input
                type="submit"
                value="Get All Product IDs"
                className="btns-forms"
              />
            </form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md>
          <div className="form-div">
            <p>
              <b>
                <i>All product IDS:</i>
              </b>
            </p>
            <ul>
              {jsonData.map(({ id }) => (
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
