import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="About">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719273600&semt=ais_user"
              alt="profile-pic"
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              I'm a frontend developer who loves exploring
              new technologies. I'm passionate about hackathons and contributing to open source projects. So far, I've been a finalist in various hackathons and
              am the project admin for my own open-source initiative. I'm always
              excited to learn and collaborate. Feel free to drop a hi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
