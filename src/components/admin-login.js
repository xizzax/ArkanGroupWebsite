import React, { useState } from "react";
import "./styles/admin-login.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  //we need a username and a password for the admin

  // these state variable hold the username and password the admin will enter
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // the username and password stored in our database
  // dummy data for now -  will be stored in DB later

  const [stored_username, setStoredUsername] = useState("admin");
  const [stored_password, setStoredPassword] = useState("12345");

  const handleLogin = (e) => {
    e.preventDefault();
    //checking to see if fields are empty
    if (username === "" || password === "") {
      window.alert("Please enter username and password");
    } else {
      if (username === stored_username && password === stored_password) {
        //redirect to admin dashboard
        navigate("/admin-dashboard", {
          state: { username, password },
        });
        window.alert("Login Successful");
      } else {
        window.alert("Incorrect username or password");
      }
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md>
            <h1 className="admin-login-heading">Admin Login</h1>
          </Col>
        </Row>
        <Row>
          <Col md>
            <div className="form-div">
              <form onSubmit={handleLogin} className="admin-login-form">
                <label>
                  Username
                  <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </label>
                <br />
                <label>
                  Password
                  <input
                    className="admin-login-input"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </label>
                <input
                  type="submit"
                  value="Login"
                  className="btns-forms"
                  id="login-btn"
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminLogin;
