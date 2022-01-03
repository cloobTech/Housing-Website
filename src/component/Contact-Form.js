/** @format */

import Button from "./Button";
import contact from "./contactForm.module.css";
import { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarker,
  FaPhone,
  FaTimes,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Input from "./Input";

const Contact = ({ children }) => {
  const [reveal, setReveal] = useState(true);

  const showContact = () => {
    setReveal(true);
  };
  return (
    <>
      {children}
      <div className={contact.mainContainer}>
        <div className={contact.subContainer}>
          <div className={contact.infoContainer}>
            {reveal ? (
              <div className={contact.infoCover}>
                <h2>CONTACT US TODAY</h2>
                <h4>24hrs dedicated hotline... 24/7</h4>
                <div className={contact.infoButton}>
                  <Button
                    btnSize="btn--block"
                    onClick={() => setReveal((reveal) => (reveal = false))}
                  >
                    Click Me
                  </Button>
                </div>
              </div>
            ) : (
              <div className={contact.dismiss}>
                <FaTimes onClick={showContact}></FaTimes>
              </div>
            )}

            <div className={contact.reveal}></div>
            <div className={contact.info}>
              <h2>Contact Info</h2>

              <div className={contact.contactDetails}>
                <div className={contact.parameter}>
                  {" "}
                  <FaMapMarker className={contact.icon} /> Address
                </div>
                <div className={contact.argument}>
                  My address - 234, Sample Address, Kano.
                </div>
              </div>

              <div className={contact.contactDetails}>
                <div className={contact.parameter}>
                  {" "}
                  <FaEnvelope className={contact.icon} /> E-mail
                </div>
                <div className={contact.argument}>cloobtech@gmail.com</div>
              </div>

              <div className={contact.contactDetails}>
                <div className={contact.parameter}>
                  {" "}
                  <FaPhone className={contact.icon} /> Phone
                </div>
                <div className={contact.argument}>+2347062482037</div>
              </div>

              <div className={contact.contactDetails}>
                <div className={contact.parameter}>
                  {" "}
                  <FaPhone className={contact.icon} /> Address
                </div>
                <div className={contact.argument}>+2347062482037</div>
              </div>

              <div className={contact.socialMedia}>
                <FaFacebook className={contact.icon} />
                <FaWhatsapp className={contact.icon}></FaWhatsapp>
                <FaTwitter className={contact.icon}></FaTwitter>
                <FaLinkedin className={contact.icon}></FaLinkedin>
                <FaInstagram className={contact.icon}></FaInstagram>
              </div>
            </div>
          </div>
          <div className={contact.messageContainer}>
            <h2 className={contact.messageTitle}>Please leave us a message</h2>
            <hr />
            <div className={contact.messageDetails}>
              <div>
                <p>Name</p>
                <Input placeholder="Please enter your full name or User name"></Input>
              </div>
            </div>
            <div className={contact.messageDetails}>
              <div>
                <p>Email</p>
                <Input placeholder="Enter your email address"></Input>
              </div>
            </div>
            <div className={contact.messageDetails}>
              <div>
                <p>Phone</p>
                <Input placeholder="Enter your phone number"></Input>
              </div>
            </div>
            <div className={contact.messageDetails}>
              <div>
                <p>Message</p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
