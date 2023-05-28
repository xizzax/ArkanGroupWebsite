import React, { useState } from "react";
import "./styles/forms.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SupplierForm() {
  const [companyName, setCompanyName] = useState("");
  const [shipmentType, setShipmentType] = useState("");
  const [whyArkan, setWhyArkan] = useState("");
  const [definingTrait, setDefiningTrait] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    console.log(
      "For submission",
      companyName,
      shipmentType,
      whyArkan,
      definingTrait
    );

    //WALEED: code to submit form data to database
    window.alert("submitted!");
    // Clear all input fields
    setCompanyName("");
    setShipmentType("");
    setWhyArkan("");
    setDefiningTrait("");
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleShipmentTypeChange = (e) => {
    setShipmentType(e.target.value);
  };

  const handleWhyArkanChange = (e) => {
    setWhyArkan(e.target.value);
  };

  const handleDefiningTraitChange = (e) => {
    setDefiningTrait(e.target.value);
  };

  return (
    <div className="form-page">
      <Container>
        <Row>
          <Col md>
            <h1>Supplier Form</h1>
            <div className="form-div">
              <form onSubmit={handleSubmit}>
                <label>
                  Name of shipping company:
                  <input
                    type="text"
                    value={companyName}
                    onChange={handleCompanyNameChange}
                  />
                </label>
                <br />
                <label>
                  What do you want to ship?
                  <input
                    type="text"
                    value={shipmentType}
                    onChange={handleShipmentTypeChange}
                  />
                </label>
                <br />
                <label>
                  Why do you choose Arkan Group?
                  <textarea value={whyArkan} onChange={handleWhyArkanChange} />
                </label>
                <br />
                <label>
                  What defines you best?
                  <textarea
                    value={definingTrait}
                    onChange={handleDefiningTraitChange}
                  />
                </label>
                <br />
                <input type="submit" value="Submit" className="btns-forms" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SupplierForm;
