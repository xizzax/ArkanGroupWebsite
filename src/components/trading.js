import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles/trading.css";
import { collection, getDocs } from "firebase/firestore";
import { checkData } from "../utils/checkData";
import React, { useState } from "react";
import { db } from "../firebase";
function Trading() {
  const [jsonDataIDs, setJsonDataIDs] = useState([]);
  const [jsonDataObjects, setJsonDataObjects] = useState([]);

  // Function for looking up all IDs
  const lookUpIDs = async (e) => {
    e.preventDefault();

    const querySnapshot = await getDocs(collection(db, "products"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));

    const ids = data.map((item) => item.id);
    console.log("IDs:", ids);

    // Use the IDs to fetch the list of objects
    const objects = await Promise.all(ids.map((id) => lookUpID(id)));
    console.log("Objects:", objects);

    setJsonDataIDs(ids);
    setJsonDataObjects(objects);
  };

  // Function for extracting data from the database based on ID
  const lookUpID = async (id) => {
    const {
      bool,
      isPresent: { data },
    } = await checkData(id);

    if (!bool) {
      console.log("Product does not exist with ID:", id);
      return null; // Return null or handle the non-existent case
    }

    console.log("Data for ID", id, ":", data);

    const { productName, productDescription } = data;

    return { productName, productDescription };
  };

  return (
    <Container>
      <Row>
        <Col md>
          <div>
            <h1 className="trading-heading">Trading</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md>
          <Button onClick={lookUpIDs}>Fetch Data</Button>
        </Col>
      </Row>
      <Row>
        <Col md>
          <div>
          {jsonDataObjects.map((object) => (
  object && object.id && (
    <li key={object.id}>
      {object.productName ? (
        <p>Name: {object.productName}</p>
      ) : (
        <p>Name: N/A</p>
      )}
      {object.productDescription ? (
        <p>Description: {object.productDescription}</p>
      ) : (
        <p>Description: N/A</p>
      )}
    </li>
  )
))}


          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Trading;
