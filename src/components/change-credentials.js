import "./styles/forms.css";
import { Container, Row, Col } from "react-bootstrap";
import { change_password, change_username} from "./handle-credentials";
import "./styles/admin-login.css";
import { useNavigate, useLocation } from "react-router-dom";
function ChangeCredentials() {
  let newUsername = "";
  let newPassword = "";
  let confirmPassword = "";

  let passwordChanged = false;
  let usernameChanged = false;

  let handleCredentialsChange = (e) => {
    e.preventDefault();
    if(newUsername !== ""){
        usernameChanged = true;
        change_username(newUsername);
    }
    if(newPassword !== ""){
        if(newPassword === confirmPassword)
        {
            passwordChanged = true;
            change_password(newPassword);
        }
        else{
            window.alert("Passwords do not match. Try again")
        }
    }
  }

  return (
    <Container>
      <Row>
        <Col md>
          <div>
            <h1 className="admin-login-heading">Change Credentials</h1>
          </div>
        </Col>
        <Row>
          <Col md>
            <div className="form-div">
              <form
                onSubmit={handleCredentialsChange}
                className="admin-login-form"
              >
                <label className="warning-note">
                    Note: Leave field empty if you do not want to change it
                </label>
                <label>
                  Enter new username:
                  <input
                    type="text"
                    placeholder="New Username"
                    value={newUsername}
                  />
                </label>
                <label>
                  Enter new password:
                  <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                  />
                </label>
                <label>
                  Confirm new password:
                  <input
                    type="password"
                    placeholder="Re-enter Password"
                    value={confirmPassword}
                  />
                </label>

                <input type="submit" value="Change" className="btns-forms" />
              </form>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
export default ChangeCredentials;
