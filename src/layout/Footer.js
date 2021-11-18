import React from "react";
import footer from "./footer.module.css";
import Button from "../component/Button";
import Input from "../component/Input";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={footer.container}>
      <div className={footer.containerContent}>
        <div className={footer.subscribeContainer}>
          <h2>Join Cloob homes to receive the best home deals deals </h2>
          <div>You can unsubsribe at anytime</div>
          <div className={footer.inputContainer}>
            <Input className={footer.input} placeholder="Enter Email"></Input>
            <Button btnColor="btn--secondary" btnSize="btn--large">
              Subscribe
            </Button>
          </div>
        </div>
        <div className={footer.info}>
          <div>
            <h2>About</h2>
            <p>Testimonial</p>
            <p>Career</p>
            <p>Settings</p>
            <p>deals</p>
          </div>
          <div>
            <h2>Gallery</h2>
            <p>Asian homes</p>
            <p>UK homes</p>
            <p>Nigerian HOMES</p>
            <p>French homes</p>
          </div>
          <div>
            <h2>Social Media</h2>
            <p>Facebook_cloobHomes</p>
            <p>Twitter_cloobHomes</p>
            <p>Whatsapp_cloobHomes</p>
            <p>YouTube_cloobHomes</p>
          </div>
          <div>
            <h2>Extras</h2>
            <p>How it works</p>
            <p>Profiling</p>
            <p>Components</p>
            <p>Utilities</p>
          </div>
        </div>
        <div className={footer.socialContainer}>
          <div className={footer.logo}>
            CLOOB <span>HOMES</span>
          </div>
          <div className={footer.copyright}>copyright @2021, cloobTech</div>
          <div>
            <FaFacebook className={footer.socialMedia} />
            <FaWhatsapp className={footer.socialMedia} />
            <FaInstagram className={footer.socialMedia} />
            <FaYoutube className={footer.socialMedia} />
            <FaLinkedin className={footer.socialMedia} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
