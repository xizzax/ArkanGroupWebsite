import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [signUp, setSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    console.log("For submission", name, email, phone, signUp);
    window.alert("submitted!");
    // Clear all input fields
    setName("");
    setEmail("");
    setPhone("");
    setSignUp(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSignUpChange = (e) => {
    setSignUp(e.target.checked);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-us-form">
        <label className="contact-label">
          Name:
          <input
            className="contact-input"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label className="contact-label">
          Email:
          <input
            className="contact-input"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <label className="contact-label">
          Phone:
          <input
            className="contact-input"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
          />
        </label>
        <br />
        <label id="newsletter-checkbox" className="contact-label">
          <input
            type="checkbox"
            checked={signUp}
            onChange={handleSignUpChange}
            className="contact-input"
            id="checkbox-newletter"
          />
          Sign up for our newsletter
        </label>
        <br />
        <input type="submit" value="Submit" className="btns-forms" id="contact-btn" />
      </form>
    </div>
  );
}

export default ContactForm;
