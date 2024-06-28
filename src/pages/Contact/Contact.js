import React, { useState } from "react";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
const Contact = () => {
  //handle submit button

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                
                <div className="row border-line">
                  <img
                      src="https://t4.ftcdn.net/jpg/00/88/74/49/360_F_88744916_2d10nlc9o5pYt7maCIQjZyePT7zL6Ujz.jpg"
                      alt="ocontact"
                      className="image"
                    />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              {/* <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact Me
                      <a
                        href="https://www.linkedin.com/in/anshika-arora-91b3361ba/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-icon"
                      >
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                      </a>
                      <a
                        href="https://github.com/ANSHIKA-26"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub color="black" size={30} className="ms-2" />
                      </a>
                    </h6>
                    <div className="contact-info">
                      <div>Phone: +123 456 7890</div>
                      <div>Email: email@example.com</div>
                    </div>
                    
                  </div>
                </div>
              </div> */}
              <div className="card2 d-flex card border-0 px-4 py-5">
  <div className="row">
    <div className="col-12">
      <div className="contact-header">
        <h3 col-12 mt-3 mb-1 text-center text-uppercase>Contact Me</h3>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/anshika-arora-91b3361ba/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
            <BsLinkedin color="blue" size={30} />
          </a>
          <a href="https://github.com/ANSHIKA-26" target="_blank" rel="noopener noreferrer">
            <BsGithub color="black" size={30} />
          </a>
        </div>
      </div>
      <div className="contact-info">
  <div className="contact-phone">Phone: +91-9650790243</div>
  <div className="contact-email">Email: arora.anshika.26@gmail.com</div>
</div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
