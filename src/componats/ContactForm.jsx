import React, { useState } from "react";
import axios from "axios";
import validator from "validator";
import './contactform.css'


function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateFormData(formData); // validate form data
    if (Object.keys(validationErrors).length === 0) {
      
      axios
        .post(
          "https://admin.srkprojects.com/web/accently1icontaction",
          formData
        )
        .then((response) => {
          console.log(response.data.data); 
        })
        .catch((error) => {
          console.log(error); 
        });
    } else {
      setValidationErrors(validationErrors); 
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateFormData = (formData) => {
    const errors = {};
    if (!validator.isEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.name || formData.name.trim() === "") {
      errors.name = "Please enter your name";
    }
    if (!formData.message || formData.message.trim() === "") {
      errors.message = "Please enter a message";
    }
    return errors;
  };

  return (
    <div className="div">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {validationErrors.email && (
            <div className="error">{validationErrors.email}</div>
          )}
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {validationErrors.name && (
            <div className="error">{validationErrors.name}</div>
          )}
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {validationErrors.message && (
            <div className="error">{validationErrors.message}</div>
          )}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
