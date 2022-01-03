/** @format */

import React from "react";
import contact from "./contact.module.css";
import ContactForm from "../component/Contact-Form.js";
const Contact = ({ children }) => {
  return (
    <div className={contact.container}>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
